import EventEmitter from 'events'

interface optInterface {
  fps?: number
  isLoop?: boolean
}

export default class SpriteAnim extends EventEmitter {
  private prevTime: number = 0
  private rqaId: number = 0
  private currentIdx: number = 0
  private ctx: CanvasRenderingContext2D

  private fps = 30
  private isLoop = false

  public status = 'initial'

  constructor(
    private imgs: HTMLImageElement[],
    private canvas: HTMLCanvasElement,
    private width: number,
    private height: number,
    private opt?: optInterface
  ) {
    super()

    this.canvas.width = this.width || 200
    this.canvas.height = this.height || 200
    this.ctx = this.canvas.getContext('2d')!

    if (this.opt?.fps) this.fps = this.opt.fps
    if (this.opt?.isLoop) this.isLoop = this.opt.isLoop
  }

  start() {
    this.prevTime = performance.now()
    this.rqaId = requestAnimationFrame(this.loop.bind(this))

    this.status = 'running'
  }

  stop() {
    if (!this.rqaId) return
    cancelAnimationFrame(this.rqaId)
    this.currentIdx = 0
    this.rqaId = 0

    this.status = 'stopped'
  }

  resize(w: number, h: number) {
    this.width = w
    this.height = h
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  private loop() {
    const currentTime = performance.now()

    if (currentTime - this.prevTime < 1000 / this.fps) {
      this.rqaId = requestAnimationFrame(this.loop.bind(this))
      return
    }

    this.drawImage(this.currentIdx)

    const isLastFrame = this.currentIdx === this.imgs.length - 1
    if (!this.isLoop && isLastFrame) {
      this.emit('end')
      this.stop()
      return
    }
    this.currentIdx = isLastFrame ? 0 : this.currentIdx + 1

    this.prevTime = currentTime

    this.rqaId = requestAnimationFrame(this.loop.bind(this))
  }

  private drawImage(i: number) {
    const img = this.imgs[i]
    this.ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      this.width,
      this.height
    )
  }
}
