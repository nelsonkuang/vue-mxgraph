<template>
  <div class="container">
    <table id="splash" width="100%" height="100%" style="background:white;position:absolute;top:0px;left:0px;z-index:4;">
      <tr>
        <td align="center" valign="middle">
          <img src="static/examples/editors/images/loading.gif">
        </td>
      </tr>
    </table>
    <div id="graph" class="base">
      <!-- Graph Here -->
    </div>
    <div id="status" class="base" align="right" style="white-space:nowrap;">
      <!-- Status Here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'mxWorkflow',
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = createEditor('static/examples/editors/config/workfloweditor.xml')
  },
  beforeDestroy () {
    this.editor && this.editor.destroy && this.editor.destroy()
    this.editor = null
    const parent = document.querySelector('body')
    const children = document.querySelectorAll('.mxWindow')
    try {
      children.forEach((el) => {
        parent.removeChild(el)
      })
    } catch (e) {
      // console.log(e)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.base {
  position: absolute;
  overflow: hidden;
  font-family: Arial;
  font-size: 8pt;
}
#graph {
  border-style: solid;
  border-color: #f2f2f2;
  border-width: 1px;
  background: url('/static/examples/editors/images/grid.gif') #fff;
}
.container {
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
