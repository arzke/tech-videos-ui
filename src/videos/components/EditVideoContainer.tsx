import { Notification } from "element-react";
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import VideoForm from 'videos/components/VideoForm';
import { IVideo, IVideoIdInRoute } from 'videos/videos';

interface IEditVideoContainerProps extends RouteComponentProps<IVideoIdInRoute>{
  video: IVideo;
}

class EditVideoContainer extends React.Component<IEditVideoContainerProps> {
  public editVideo() {
    Notification({
      message: 'This is not yet implemented.',
      title: 'Error',
      type: 'error',
    })
  }

  public render() {
    return this.props.video.id && <VideoForm video={this.props.video} onSubmit={this.editVideo}/> || <p>Loading...</p>;
  }
}

export default EditVideoContainer;
