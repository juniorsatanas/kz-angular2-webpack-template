/**
 * Componente de visualização de usuário.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KzDataHoraBrPipe } from '../../shared/pipes';

import { Usuario, UsuarioService } from '../shared';

@Component({
	selector: 'kz-aluno-visualizar',
	templateUrl: './usuario-visualizar.component.html',
	providers: [ UsuarioService ],
	styleUrls: ['./usuario-visualizar.component.css'],
	pipes: [ KzDataHoraBrPipe ]
})
export class UsuarioVisualizarComponent implements OnInit {

	private id: number;
	private usuario: Usuario;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param UsuarioService usuarioService
	 */
	constructor(
		private route: ActivatedRoute, 
		private usuarioService: UsuarioService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.usuario = this.usuarioService.buscarPorId(this.id);
	}
}