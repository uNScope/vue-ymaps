const DOM_EVENTS = {
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseUp: 'mouseup',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDblClick: 'dblclick',
  onBeforeDrag: 'beforedrag',
  onBeforeDragStart: 'beforedragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onWheel: 'wheel',
  onMultiTouchEnd: 'multitouchend',
  onMultiTouchMove: 'multitouchmove',
  onMultiTouchStart: 'multitouchstart'
}

const BALLOON_EVENTS = {
  onBallonClose: 'balloonclose',
  onBalloonOpen: 'balloonopen',
  onHintClose: 'hintclose',
  onHintOpen: 'hintopen',
}

const ACTION_EVENTS = {
  onActionBegin: 'actionbegin',
  onActionBreak: 'actionbreak',
  onActionEnd: 'actionend',
  onActionTick: 'actiontick',
  onActionTickComplete: 'actiontickcomplete'
}

const MAP_EVENTS = {
  onMarginChange: 'marginchange',
  onSizeChange: 'sizechange',
  onTypeChange: 'typechange',
  onMapChange: 'mapchange',
  onBoundsChange: 'boundschange',
  onDestroy: 'destroy',
}

const CONTROL_EVENTS = {
  onPress: 'press',
  onSelect: 'select',
  onClear: 'clear',
  onError: 'error',
  onLoad: 'load',
  onResultSelect: 'resultselect',
  onResultShow: 'resultshow',
  onSubmit: 'submit',
  onCollapse: 'collapse',
  onExpand: 'expand',
}

export const GEOOBJECT_EVENTS = {
  onOptionsChange: 'optionschange',
  onOverlayChange: 'overlaychange',
  onParentChange: 'parentchange',
  onPropertiesChange: 'propertieschange',
  onGeometryChange: 'geometrychange',
  onEditorStateChange: 'editorstatechange',
}

export const events = {
  onDeselect: 'deselect',
  onDisable: 'disable',
  onEnable: 'enable',
  onHideTraffic: 'hidetraffic',
  onProviderKeyChange: 'providerkeychange',
  onShowTraffic: 'showtraffic',
  onAdd: 'add',
  onRemove: 'remove'
}
