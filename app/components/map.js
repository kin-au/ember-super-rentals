import Component from "@glimmer/component";
// import access token from the env file
import ENV from "super-rentals/config/environment";

export default class MapComponent extends Component {
  // token getter allows us to access our token as this.token
  // we can use this token both here and in the hbs template
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
