import {Fond} from "./Fond";
import {Platforms} from "./Platforms";
import {settings} from "./settings";
import {Doodler} from "./Doodler";

export class Canvas{
    private fond: Fond;
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public platforms : Platforms[];
    public doodler : Doodler;
    public sprite: HTMLImageElement;
    constructor(sprite: HTMLImageElement) {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.fond = new Fond(this.canvasElement,this.ctx);
        this.platforms = [];
       this.sprite = sprite
        this.update();
        this.doodler = new Doodler(this.canvasElement, this.ctx, this.platforms,this.sprite)
        this.draw();

    }
    update(){
        for (let i = 0; i < settings.platform.maxCount; i++) {
            this.platforms.push(new Platforms(this.canvasElement,this.ctx, this.platforms, this.sprite));

       }
    }
    draw(){
        this.platforms.forEach((platform:Platforms)=>{
            platform.draw();
        });
        this.doodler.draw();
    }


}