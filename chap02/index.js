function Modal(el) {
  this.initialize(el)
}

Modal.prototype.initialize = function(el) { 
  this.$el = el
  this.$container = $("#modal")
  this.$contents = $("#modal-contents")
  this.$close = $("#modal-close")
  this.$next = $("#modal-next")
  this.$prev = $("#modal-prev")
  this.$overlay = $("modal-overlay")
  this.$window = $(window)
  this.index = 0
  this.handleEvents()
}

Modal.prototype.handleEvents = function() {
  var self = this

  this.$el.on("click", function(e) {
    self.show(e)
    return false
  })

  this.$close.on("click", function() {
  })
}

Modal.prototype.show = function(e) {
  var $target = $(e.currentTarget)
  var src = $target.attr("href")

  this.$contents.html("<img src=\"" + src + "\" />")
  this.$container.fadeIn()
  this.$overlay.fadeIn()
  this.index = $target.data("index")
  return false
}

var modal = new Modal($("#modal-thumb a"))

