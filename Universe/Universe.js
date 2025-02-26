import * as THREE from "three";
import Sizes from './Utils/Sizes';
import Camera from './Camera';
import Renderer from "./Renderer";
import Time from "./Utils/Time";
import Resources from './Utils/Resources';
import assets from './Utils/assets';

import Earth from './Earth/Earth';

export default class Universe {
	static instance
	constructor(canvas) {
		if(Universe.instance){
			return Universe.instance
		}
		Universe.instance = this
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.resources = new Resources(assets);
		this.earth = new Earth();

		this.sizes.on("resize", () => {
			this.resize();
		})

		this.time.on("update", () => {
			this.update();
		})

	}

	resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	update() {
		this.camera.update();
		this.renderer.update();
	}
}