import {useEffect} from 'react';
import {updatePost} from 'src/lib/posts';
import events from '../lib/events';

export default function usePostsEventEffect({
  refresh,
  removePost,
  enabled,
  uploadPost,
}) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    events.addListener('refresh', refresh);
    events.addListener('removePost', removePost);
    events.addListener('updatePost', updatePost);
    return () => {
      events.removeListener('refresh', refresh);
      events.removeListener('removePost', removePost);
      events.removeListener('updatePost', updatePost);
    };
  }, [refresh, removePost, updatePost, enabled]);
}
