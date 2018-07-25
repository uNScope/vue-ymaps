import MainDemo from './components/main-demo'
import PointDemo from './components/point-demo'
import RectDemo from './components/rect-demo'

const sections = [{
  path: '/demo/main',
  component: MainDemo,
  title: 'Add component on page',
  code: 'demo-main',
}, {
  name: 'GeoObjects',
  code: 'demo-geoobjects',
  title: 'GeoObjects'
}]

const routes = [
  {
    path: '/demo/point',
    name: 'PointDemo',
    component: PointDemo,
    parent: 'demo-geoobjects',
    title: 'Point example'
  }, {
    path: '/demo/rect',
    name: 'RectDemo',
    component: RectDemo,
    parent: 'demo-geoobjects',
    title: 'Rect example'
  }
]

export const examplesMenu = sections.map((section) => {
  section.items = routes.filter((route) => route.parent === section.code) || []
  return section
})

export const examplesRoutes = [
  ...sections.filter((section) => section.path),
  ...routes
]
