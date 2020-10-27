import Component from "@glimmer/component";
// import access token from the env file
import ENV from "ember-super-rentals/config/environment";

const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";
export default class MapComponent extends Component {
  // getters cannot be assigned new values directly, they produce/return values
  // ember automatically tracks variables that are used to compute getter's value
  // glimmer implicitly marks the arguments from this.args as @tracked
  // so no need to monitor them for changes using @tracked
  get src() {
    // access the component's arguments using the this.args, an API provided by glimmer/component superclass
    // can return the value of src by using this.src from within the template
    let { lng, lat, width, height, zoom } = this.args;
    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;
    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  // token getter allows us to access our token as this.token
  // we can use this token both here and in the hbs template
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
