/**
 * Arquivo de teste do validador de CPF.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Control } from '@angular/common';

import { KzCpfValidator } from './kz-cpf.validator';

describe('KzCpfValidator', () => {

	beforeEach(() => {
	});

	it('deve validar corretamente o CPF 54512089306', function() {
		var control:Control = new Control('54512089306');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toBeNull();
    });
    
    it('deve validar corretamente o CPF 615.442.056-00', function() {
    	var control:Control = new Control('615.442.056-00');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toBeNull();
    });
    
    it('deve retornar inválido para o CPF 12545236258', function() {
    	var control:Control = new Control('12545236258');
        var cpf = KzCpfValidator.validate(control);        
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 00000000000', function() {
    	var control:Control = new Control('00000000000');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 11111111111', function() {
    	var control:Control = new Control('11111111111');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 22222222222', function() {
    	var control:Control = new Control('22222222222');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 33333333333', function() {
    	var control:Control = new Control('33333333333');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 44444444444', function() {
    	var control:Control = new Control('44444444444');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 55555555555', function() {
    	var control:Control = new Control('55555555555');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 66666666666', function() {
    	var control:Control = new Control('66666666666');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 77777777777', function() {
    	var control:Control = new Control('77777777777');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 88888888888', function() {
    	var control:Control = new Control('88888888888');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para o CPF 99999999999', function() {
    	var control:Control = new Control('99999999999');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para CPF vazio', function() {
    	var control:Control = new Control('');
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });
    
    it('deve retornar inválido para CPF undefined', function() {
    	var control:Control = new Control(undefined);
        var cpf = KzCpfValidator.validate(control);
        expect(cpf).toEqual({ 'cpf': true });
    });

});