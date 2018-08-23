import apiService from 'app/http/apiService';
import { Notification } from "element-react";
import * as React from 'react';
import VideosList from 'videos/components/VideosList';
import { IVideo, IVotesByVideoId } from 'videos/videos';

interface IVideosListContainerState {
  videos: IVideo[]
  votes: IVotesByVideoId
}

class VideosListContainer extends React.Component<{}, IVideosListContainerState> {
  public state = {
    videos: [],
    votes: {}
  };

  public async componentDidMount() {
    try {
      const videosPromise = apiService.get('/videos');
      const votesPromise = apiService.get('/votes/results?sessionId=1');

      const [{data: videos}, {data: votes}] = await Promise.all([videosPromise, votesPromise]);

      this.setState({
        videos,
        votes: votes.reduce((result: any, vote: any) => {
          result[vote[1].id] = vote[0];

          return result;
        }, {})
      });
    } catch(error) {
      Notification({
        message: 'Could not fetch videos.',
        title: 'Error',
        type: 'error',
      });
    }
  }

  public render() {
    return <VideosList videos={this.state.videos} votes={this.state.votes}/>;
  }
}

export default VideosListContainer;
