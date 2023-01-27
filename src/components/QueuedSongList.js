import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

function QueuedSongList() {
  const song = {
    title: 'LÜNE',
    artist: 'MÖÖN',
    thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <Typography color='textSecondary' variant='button'>
        QUEUE (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song} />
      ))}
    </div>
  );
}

function QueuedSong({ song }) {
  const { thumbnail, artist, title } = song;
  return (
    <QueueContainer>
      <QueueAvatar src={thumbnail} alt='Song thumbnail' />
      <SongInfoContainer>
        <QueueText variant='subtitle2'>{title}</QueueText>
        <QueueText color='textSecondary' variant='body2'>
          {artist}
        </QueueText>
      </SongInfoContainer>
      <IconButton>
        <Delete color='error' />
      </IconButton>
    </QueueContainer>
  );
}

export default QueuedSongList;

// styled components

const QueueAvatar = styled(Avatar)({
  width: 44,
  height: 44,
});

const QueueText = styled(Typography)({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const QueueContainer = styled('div')({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: '50px auto 50px',
  gridGap: 12,
  alignItems: 'center',
  marginTop: 10,
});

const SongInfoContainer = styled('div')({
  overflow: 'hidden',
  whitespace: 'nowrap',
});
