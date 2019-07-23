import React, { Component } from "react";
import { Polyline } from "react-google-maps";
import _ from "lodash";

class SegmentPolyline extends Component {
  render() {
    const polyline = _.get(this.props, "segment.polyline");
    let path = [];

    if (_.get(polyline, "length", 0) > 0) {
      for (let i = 0; i < polyline.length; i++) {
        const coordinates = polyline[i];
        path.push({ lat: coordinates[0], lng: coordinates[1] });
      }
    }

    return (
      <Polyline
        path={path}
        geodesic={true}
        options={{
          strokeColor: "#02CE5C",
          strokeOpacity: 1,
          strokeWeight: 6
        }}
      />
    );
  }
}

export default SegmentPolyline;
