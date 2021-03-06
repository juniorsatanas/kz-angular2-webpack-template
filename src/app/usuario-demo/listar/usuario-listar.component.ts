/**
 * Componente de listagem de usuários.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Usuario, UsuarioService } from '../shared';
import { ModalUtilComponent } from '../../shared';
import { KzDataHoraBrPipe } from '../../shared/pipes';

@Component({
	selector: 'kz-usuario-listar',
	templateUrl: './usuario-listar.component.html',
	providers: [ UsuarioService ],
	directives: [ ModalUtilComponent ],
	styleUrls: ['./usuario-listar.component.css'],
	pipes: [ KzDataHoraBrPipe ]
})
export class UsuarioListarComponent implements OnInit {

	private usuarios: Usuario[];
	private idExcluir: number;

	/**
	 * Construtor.
	 *
	 * @param UsuarioService usuarioService
	 */
	constructor(private usuarioService: UsuarioService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.usuarios = this.usuarioService.listarTodos();
	}

	/**
	 * Método responsável por armazenar o id do usuário a 
	 * removido.
	 *
	 * @param number id
	 */
	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	/**
	 * Método responsável por remover um usuário.
	 */
 	onExcluir() {
 		this.usuarioService.excluir(this.idExcluir);
 		this.idExcluir = -1;
 		this.usuarios = this.usuarioService.listarTodos();
 	}
}