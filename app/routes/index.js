import Route from "@ember/routing/route";

// extend the Route class into our own IndexRoute
// export this so we can use it elsewhere
export default class IndexRoute extends Route {
  // model() is an async method, aka the 'model hook'
  // the model hook fetches/preps any data you need for the route
  // ember calls the hook and returns an object (the 'model')
  // normally we'd use this to fetch data from a server
  async model() {
    return [
      {
        title: "Grand Old Mansion",
        owner: "Veruca Salt",
        city: "San Francisco",
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: "Estate",
        type: "Standalone",
        bedrooms: 15,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        description:
          "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
      },
      {
        title: "Urban Living",
        owner: "Mike Teavee",
        city: "Seattle",
        location: {
          lat: 47.6062,
          lng: -122.332,
        },
        category: "Condo",
        type: "Standalone",
        bedrooms: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        description:
          "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
      },
      {an
        title: "Downtown Charm",
        owner: "Violet Beauregarde",
        city: "Portland",
        location: {
          lat: 45.5175,
          lng: -122.6801,
        },
        category: "Apartment",
        type: "Standalone",
        bedrooms: 3,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        description:
          "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
      },
    ];
  }
}
