Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create('Ext.data.Store', {
  fields: ['name', 'commitments', 'contributions'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: 'top'
});
Ext.create({
  xtype: 'searchfield',
  ui: 'faded',
  ref: function ref(field) {
    return _this3.query = field;
  },
  placeholder: 'Search...',
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    flex: 1
  }), _defineProperty(_ref2, medium, {
    flex: undefined
  }), _ref2)
});
Ext.create({
  xtype: 'column',
  text: 'Name',
  dataIndex: 'name',
  flex: 3,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Commitments',
  dataIndex: 'commitments',
  flex: 2,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Contributions',
  dataIndex: 'contributions',
  flex: 2,
  resizable: true
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
Ext.require('Ext.plugin.Responsive');
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: 10000
  }, {
    name: '2011',
    data1: 10100
  }, {
    name: '2012',
    data1: 11000
  }, {
    name: '2013',
    data1: 9050
  }, {
    name: '2014',
    data1: 10450
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  interactions: ['rotate'],
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }, {
    type: 'line',
    fill: true,
    style: {
      fill: '#96D4C6',
      fillOpacity: .6,
      stroke: '#0A3F50',
      strokeOpacity: .6
    },
    xField: 'name',
    yField: 'data2',
    marker: {
      type: 'circle',
      radius: 4,
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: 10000
  }, {
    name: '2011',
    data1: 10100
  }, {
    name: '2012',
    data1: 11000
  }, {
    name: '2013',
    data1: 9050
  }, {
    name: '2014',
    data1: 10450
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }, {
    type: 'line',
    fill: true,
    style: {
      fill: '#96D4C6',
      fillOpacity: .6,
      stroke: '#0A3F50',
      strokeOpacity: .6
    },
    xField: 'name',
    yField: 'data2',
    marker: {
      type: 'circle',
      radius: 4,
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: 10000
  }, {
    name: '2011',
    data1: 10100
  }, {
    name: '2012',
    data1: 11000
  }, {
    name: '2013',
    data1: 9050
  }, {
    name: '2014',
    data1: 10450
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axis: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }, {
    type: 'line',
    fill: true,
    style: {
      fill: '#96D4C6',
      fillOpacity: .6,
      stroke: '#0A3F50',
      strokeOpacity: .6
    },
    xField: 'name',
    yField: 'data2',
    marker: {
      type: 'circle',
      radius: 4,
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: 10000
  }, {
    name: '2011',
    data1: 10100
  }, {
    name: '2012',
    data1: 11000
  }, {
    name: '2013',
    data1: 9050
  }, {
    name: '2014',
    data1: 10450
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  interactions: ['rotate'],
  axis: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }, {
    type: 'line',
    fill: true,
    style: {
      fill: '#96D4C6',
      fillOpacity: .6,
      stroke: '#0A3F50',
      strokeOpacity: .6
    },
    xField: 'name',
    yField: 'data2',
    marker: {
      type: 'circle',
      radius: 4,
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: 10000
  }, {
    name: '2011',
    data1: 10100
  }, {
    name: '2012',
    data1: 11000
  }, {
    name: '2013',
    data1: 9050
  }, {
    name: '2014',
    data1: 10450
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axis: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }, {
    type: 'line',
    fill: true,
    style: {
      fill: '#96D4C6',
      fillOpacity: .6,
      stroke: '#0A3F50',
      strokeOpacity: .6
    },
    xField: 'name',
    yField: 'data2',
    marker: {
      type: 'circle',
      radius: 4,
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: _this.state.initialAmount
  }, {
    name: '2011',
    data1: _this.state.initialAmount * 1.10
  }, {
    name: '2012',
    data1: _this.state.initialAmount * 1.15
  }, {
    name: '2013',
    data1: _this.state.initialAmount * 1.13
  }, {
    name: '2014',
    data1: _this.state.initialAmount * 0.98
  }, {
    name: '2015',
    data1: _this.state.initialAmount * 1.08
  }, {
    name: '2016',
    data1: _this.state.initialAmount * 1.28
  }, {
    name: '2017',
    data1: _this.state.initialAmount * 1.43
  }, {
    name: '2018',
    data1: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axis: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.axis.Axis');
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.series.Series');
Ext.create('Ext.data.Store', {
  fields: ['name', 'data1'],
  data: [{
    name: '2010',
    data1: _this.state.initialAmount
  }, {
    name: '2011',
    data1: _this.state.initialAmount * 1.10
  }, {
    name: '2012',
    data1: _this.state.initialAmount * 1.15
  }, {
    name: '2013',
    data1: _this.state.initialAmount * 1.13
  }, {
    name: '2014',
    data1: _this.state.initialAmount * 0.98
  }, {
    name: '2015',
    data1: _this.state.initialAmount * 1.08
  }, {
    name: '2016',
    data1: _this.state.initialAmount * 1.28
  }, {
    name: '2017',
    data1: _this.state.initialAmount * 1.43
  }, {
    name: '2018',
    data1: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axis: [{
    type: 'numeric',
    position: 'left',
    fields: ['data1'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['name'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'name',
    yField: 'data1',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.axis.Numeric');
Ext.require('Ext.chart.axis.Time');
Ext.create('Ext.data.Store', {
  fields: ['year', 'value'],
  data: [{
    year: '2010',
    value: _this.state.initialAmount
  }, {
    year: '2011',
    value: _this.state.initialAmount * 1.10
  }, {
    year: '2012',
    value: _this.state.initialAmount * 1.15
  }, {
    year: '2013',
    value: _this.state.initialAmount * 1.13
  }, {
    year: '2014',
    value: _this.state.initialAmount * 0.98
  }, {
    year: '2015',
    value: _this.state.initialAmount * 1.08
  }, {
    year: '2016',
    value: _this.state.initialAmount * 1.28
  }, {
    year: '2017',
    value: _this.state.initialAmount * 1.43
  }, {
    year: '2018',
    value: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: ['value'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    },
    grid: true,
    minimum: 0
  }, {
    type: 'category',
    position: 'bottom',
    fields: ['year'],
    title: {
      text: 'Sample Values',
      fontSize: 15
    }
  }],
  series: [{
    type: 'line',
    style: {
      stroke: '#30BDA7',
      lineWidth: 2
    },
    xField: 'year',
    yField: 'value',
    marker: {
      type: 'path',
      path: ['M', -4, 0, 0, 4, 4, 0, 0, -4, 'Z'],
      stroke: '#30BDA7',
      lineWidth: 2,
      fill: 'white'
    }
  }]
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.axis.Numeric');
Ext.require('Ext.chart.axis.Time');
Ext.create('Ext.data.Store', {
  fields: ['year', 'value'],
  data: [{
    year: '2010',
    value: _this.state.initialAmount
  }, {
    year: '2011',
    value: _this.state.initialAmount * 1.10
  }, {
    year: '2012',
    value: _this.state.initialAmount * 1.15
  }, {
    year: '2013',
    value: _this.state.initialAmount * 1.13
  }, {
    year: '2014',
    value: _this.state.initialAmount * 0.98
  }, {
    year: '2015',
    value: _this.state.initialAmount * 1.08
  }, {
    year: '2016',
    value: _this.state.initialAmount * 1.28
  }, {
    year: '2017',
    value: _this.state.initialAmount * 1.43
  }, {
    year: '2018',
    value: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  insertPadding: '40 40 60 40',
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: 'value',
    title: 'Amount'
  }, {
    type: 'time',
    dateFormat: 'YYYY',
    position: 'bottom',
    fields: 'year',
    title: 'Year'
  }],
  series: {
    type: 'line',
    xField: 'year',
    yField: 'value'
  }
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.axis.Numeric');
Ext.require('Ext.chart.axis.Time');
Ext.create('Ext.data.Store', {
  fields: ['year', 'value'],
  data: [{
    year: 2010,
    value: _this.state.initialAmount
  }, {
    year: 2011,
    value: _this.state.initialAmount * 1.10
  }, {
    year: 2012,
    value: _this.state.initialAmount * 1.15
  }, {
    year: 2013,
    value: _this.state.initialAmount * 1.13
  }, {
    year: 2014,
    value: _this.state.initialAmount * 0.98
  }, {
    year: 2015,
    value: _this.state.initialAmount * 1.08
  }, {
    year: 2016,
    value: _this.state.initialAmount * 1.28
  }, {
    year: 2017,
    value: _this.state.initialAmount * 1.43
  }, {
    year: 2018,
    value: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  insertPadding: '40 40 60 40',
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: 'value',
    title: 'Amount, $'
  }, {
    type: 'time',
    dateFormat: 'YYYY',
    position: 'bottom',
    fields: 'year',
    title: 'Year'
  }],
  series: {
    type: 'line',
    xField: 'year',
    yField: 'value'
  }
});
Ext.create({"xtype":"cartesian"});
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.axis.Numeric');
Ext.create('Ext.data.Store', {
  fields: ['year', 'value'],
  data: [{
    year: 2010,
    value: _this.state.initialAmount
  }, {
    year: 2011,
    value: _this.state.initialAmount * 1.10
  }, {
    year: 2012,
    value: _this.state.initialAmount * 1.15
  }, {
    year: 2013,
    value: _this.state.initialAmount * 1.13
  }, {
    year: 2014,
    value: _this.state.initialAmount * 0.98
  }, {
    year: 2015,
    value: _this.state.initialAmount * 1.08
  }, {
    year: 2016,
    value: _this.state.initialAmount * 1.28
  }, {
    year: 2017,
    value: _this.state.initialAmount * 1.43
  }, {
    year: 2018,
    value: _this.state.initialAmount * 1.53
  }]
});
Ext.create({
  xtype: 'cartesian',
  store: this.store,
  insertPadding: '40 40 60 40',
  axes: [{
    type: 'numeric',
    position: 'left',
    fields: 'value',
    title: 'Amount, $'
  }, {
    type: 'numeric',
    position: 'bottom',
    fields: 'year',
    title: 'Year'
  }],
  series: {
    type: 'line',
    xField: 'year',
    yField: 'value'
  }
});
Ext.create({"xtype":"cartesian"});
Ext.create('Ext.data.Store', {
  fields: ['name', 'fundSize', 'performance'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: 'top'
});
Ext.create({
  xtype: 'searchfield',
  ui: 'faded',
  ref: function ref(field) {
    return _this3.query = field;
  },
  placeholder: 'Search...',
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    flex: 1
  }), _defineProperty(_ref2, medium, {
    flex: undefined
  }), _ref2)
});
Ext.create({
  xtype: 'column',
  text: 'Name',
  dataIndex: 'name',
  flex: 3,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Fund Size',
  dataIndex: 'fundSize',
  flex: 2,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Performance',
  dataIndex: 'performance',
  flex: 2,
  resizable: true
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
Ext.require('Ext.panel.Resizer');
Ext.create({
  xtype: 'container',
  fullscreen: true,
  layout: 'fit'
});
Ext.create({
  xtype: 'titlebar',
  title: 'Investments App',
  docked: 'top'
});
Ext.create({
  xtype: 'button',
  align: 'left',
  iconCls: 'x-fa fa-bars',
  handler: this.toggleAppMenu,
  ripple: false
});
Ext.create({
  xtype: 'sheet',
  displayed: showAppMenu,
  side: 'left',
  onHide: this.onHideAppMenu
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  title: 'ExtReact Boilerplate'
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  shadow: true,
  docked: 'left',
  zIndex: 2,
  width: 300,
  resizable: {
    split: true,
    edges: 'east',
    dynamic: true,
    maxSize: [300, null],
    minSize: [80, null]
  },
  listeners: {
    resize: this.handleMenuResize
  }
});
Ext.create({
  xtype: 'transition',
  type: 'fade'
});
Ext.create({"xtype":"transition"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"panel"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"})