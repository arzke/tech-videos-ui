import { Notification } from "element-react";
import * as React from 'react';
import VideoForm from 'videos/components/VideoForm';
import { IVideo } from 'videos/videos';

interface IAddVideoContainerState {
  video: IVideo
}

class AddVideoContainer extends React.Component<{}, IAddVideoContainerState> {
  public state = {
    video: {
      description: '',
      title: '',
      url: '',
      votes: 0
    }
  };

  public addVideo() {
    Notification({
      message: 'This is not yet implemented.',
      title: 'Error',
      type: 'error',
    });
  }

  public render() {
    return <VideoForm video={this.state.video} onSubmit={this.addVideo}/>;
  }
}

export default AddVideoContainer;
