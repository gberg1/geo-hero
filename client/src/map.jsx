var React = require('react');
var GoogleMapsLoader = require('google-maps');
var keys = require('../utils/config');

var Map = React.createClass({
  var map = null;
  var marker = null;
  var infoWindow = null;
  render: function() {
    return (
      <div className="gmap">
        <div ref="map_canvas">
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    // create the map, marker and infoWindow after the component has been rendered because we need to manipulate the DOM for Google  
    this.map = this.createMap();
    this.marker = this.createMarker();
    this.infoWindow = this.createInfoWindow();
  },
  componentWillUnmount: function() {
    // TODO: destroy markers and unbind events after component is unmounted from DOM

    // this.map = this.destroyMap();
    // this.marker = this.destroyMarker();
    // this.infoWindow = this.destroyInfoWindow();

    GoogleMapsLoader.release(function() {
      console.log('google maps api released');
    });
  },
  createMap: function() {
    // TODO: handle passing down coords prop via parent component

    var coords, mapOptions;

    coords = this.props.coords;

    mapOptions = {
      keys.googleMaps.GoogleMapsLoader.KEY,
      keys.googleMaps.GoogleMapsLoader.CLIENT,
      keys.googleMaps.GoogleMapsLoader.VERSION,
      keys.googleMaps.GoogleMapsLoader.SENSOR,
      keys.googleMaps.GoogleMapsLoader.LIBRARIES,
      keys.googleMaps.GoogleMapsLoader.LANGUAGE,
      minZoom: 9,
      zoom: 10,
      center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
    };

    GoogleMapsLoader.load(function(google) {
      new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions);
      console.log('google maps api loaded');
    });

  },
  createMarker: function() {
    var marker;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon),
      map: this.map
    });
  },
  createInfoWindow: function() {
    var contentString, infoWindow;

    contentString = "<div class='InfoWindow'>I'm a Window that contains Info</div>";

    infoWindow = new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    });
  },
  handleZoomChange: function() {
    // handle what happens when the zoom changes
  },
  handleDragEnd: function() {
    // handle what happens when the map is dragged somewhere
  }
});