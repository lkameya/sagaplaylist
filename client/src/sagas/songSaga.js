import { call, put, takeEvery } from 'redux-saga/effects';
import { types as songTypes } from '../ducks/songs';

import SpotifyWebApi from 'spotify-web-api-js';

export const spotifyApi = new SpotifyWebApi();

export function* fetchSong() {
  try {
    const response = yield call(spotifyApi.getMyCurrentPlaybackState);
    yield put({ type: songTypes.FETCH_CURRENT_SONG_SUCCEEDED, currentSong: response.item });
  } catch (error) {
    yield put({ type: songTypes.FETCH_CURRENT_SONG_FAILED, message: error.message });
  }
}

export function* fetchSongsFromPlaylist() {
  try {
    const track = yield call(spotifyApi.getMyCurrentPlayingTrack);
    const info = track.context.uri.split(':');
    const playlistId = info[info.length - 1];
    const tracks = yield call([spotifyApi, 'getPlaylistTracks'], playlistId);
    const songs = tracks.items.map(song => song.track);

    yield put({ type: songTypes.FETCH_SONGS_FROM_PLAYLIST_SUCCEEDED, songs, playlistId });
  } catch (error) {
    yield put({ type: songTypes.FETCH_SONGS_FROM_PLAYLIST_FAILED, message: error.message });
  }
}

function* fetchSongsSearch({ term }) {
  try {
    if (term !== '') {
      const result = yield call([spotifyApi, 'searchTracks'], term, { limit: 5 });
      yield put({ type: songTypes.FETCH_SONGS_SEARCH_SUCCEEDED, songResults: result.tracks.items });
    } else {
      yield put({ type: songTypes.CLEAR_SEARCH });
    }
  } catch (error) {
    yield put({ type: songTypes.FETCH_SONGS_SEARCH_FAILED, message: error.message });
  }
}

function* addSongToPlaylist({ song }) {
  try {
    const track = yield call(spotifyApi.getMyCurrentPlayingTrack);
    const info = track.context.uri.split(':');
    const playlistId = info[info.length - 1];
    yield call([spotifyApi, 'addTracksToPlaylist'], playlistId, [song.uri]);

    yield put({ type: songTypes.ADD_SONG_TO_PLAYLIST_SUCCEEDED, newSong: song });
  } catch (error) {
    yield put({ type: songTypes.ADD_SONG_TO_PLAYLIST_FAILED, newSong: song });
  }
}

function* skipNext() {
  try {
    yield call([spotifyApi, 'skipToNext']);
  } catch (error) {
    yield null;
  }
}

function* skipPrevious() {
  try {
    yield call([spotifyApi, 'skipPrevious']);
  } catch (error) {
    yield null;
  }
}

function* togglePlay({ playing }) {
  try {
    if (playing)
      yield call([spotifyApi, 'pause']);
    else
      yield call([spotifyApi, 'play']);
  } catch (error) {
    yield null;
  }
}

const songSaga = [
  takeEvery(songTypes.FETCH_CURRENT_SONG, fetchSong),
  takeEvery(songTypes.FETCH_SONGS_FROM_PLAYLIST, fetchSongsFromPlaylist),
  takeEvery(songTypes.FETCH_SONGS_SEARCH, fetchSongsSearch),
  takeEvery(songTypes.ADD_SONG_TO_PLAYLIST, addSongToPlaylist),
  takeEvery(songTypes.SKIP_NEXT, skipNext),
  takeEvery(songTypes.SKIP_PREVIOUS, skipPrevious),
  takeEvery(songTypes.TOGGLE_PLAY, togglePlay),
];

export default songSaga;
