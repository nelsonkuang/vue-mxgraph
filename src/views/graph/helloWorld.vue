<template>
  <div class="container" id="hwContainer">
    <!-- Creates a container for the graph with a grid wallpaper -->
    <div id="graphContainer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  data () {
    return {
    }
  },
  mounted () {
    this.init(document.getElementById('graphContainer'))
  },
  methods: {
    init (container) {
      // Disables the built-in context menu
      mxEvent.disableContextMenu(container)

      // Creates the graph inside the given container
      let graph = new mxGraph(container)

      // Enables rubberband selection
      new mxRubberband(graph)

      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      let parent = graph.getDefaultParent()

      // Adds cells to the model in a single step
      graph.getModel().beginUpdate()
      try {
        const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30)
        const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30)
        const e1 = graph.insertEdge(parent, null, '', v1, v2)
      }
      finally {
        // Updates the display
        graph.getModel().endUpdate()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100%;
  position: relative;
}
#graphContainer {
  position: relative;
  overflow: hidden;
  width: 321px;
  height: 241px;
  background: url('/static/examples/editors/images/grid.gif');
  cursor: default;
}
</style>
