import apiService from 'app/http/apiService';
import { Notification } from "element-react";
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IVideo, IVideoIdInRoute } from 'videos/videos';

interface IVideoContainerProps extends RouteComponentProps<IVideoIdInRoute> {
  render: (state: IVideoContainerState) => any;
}

interface IVideoContainerState {
  video: IVideo;
}

class FetchVideo extends React.Component<IVideoContainerProps, IVideoContainerState> {
  public state = {
    video: {
      description: '',
      title: '',
      url: '',
      votes: 0
    }
  };

  public async componentDidMount() {
    const {match: {params: {videoId}}} = this.props;
    try {
      const {data: video} = await apiService.get(`/videos/${videoId}`);
      this.setState({
        video
      });
    } catch(error) {
      Notification({
        message: 'Could not retrieve video.',
        title: 'Error',
        type: 'error',
      });
    }
  }

  public render() {
    return this.props.render(this.state);
  }
}

export default FetchVideo;
