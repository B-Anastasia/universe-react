import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.setState({
          loading: true,
        });
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };
    update = () => {
      this.props.getData().then((data) => {
        this.setState({
          data,
          loading: false,
        });
      });
      // .catch(this.onError);
    };

    render() {
      const { data, loading, error } = this.state;
      if (error) {
        return <ErrorIndicator />;
      }
      if (loading) {
        return <Spinner />;
      }
      // if (!(loading || error)) {
      return <View {...this.props} data={data} />;
      // }
    }
  };
};
export default withData;
