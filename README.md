# react super components

## Demo
https://react-super-components.herokuapp.com/

## API

### Image
```
/**
 * Image component is a wrapper for <img/> with lazy loading and error
 * handling support.
 *
 * Props:
 * - src (required)
 * - loadingSrc
 * - LoadingComponent (LoadingComponent takes precedence over loadingSrc)
 * - ErrorComponent
 *
 * Other props will be pass to the html native img commponent,
 * LoadingComponent and ErrorComponent.
 *
 * When error happens, an error prop will be passed to ErrorComponent.
 *
 * NOTE: Use 'with' and 'height' in style is highly recommanded.
 */

import { Image } from 'react-super-components';

<Image
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  loadingSrc="/local-image.jpg"
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  LoadingComponent={MyLoadingComponent}
  ErrorComponent={MyErrorComponent}
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />
```

### Subscriptions
```
import { Subscriptions } from 'react-super-components';

<Subscriptions
  subscriptions={[Meteor.subscribe('users')]} />
```

## Testing
```
cd kitchen-sink
meteor run
```
