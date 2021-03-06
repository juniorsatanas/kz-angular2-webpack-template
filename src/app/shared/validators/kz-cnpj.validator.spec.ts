/**
 * Arquivo de teste do validador de CNPJ.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Control } from '@angular/common';

import { KzCnpjValidator } from './kz-cnpj.validator';

describe('KzCnpjValidator', () => {

	beforeEach(() => {
	});
    
    it('deve validar corretamente o CNPJ 82494674000154', function() {
        var cnpj = KzCnpjValidator.validate(new Control('82494674000154'));
        expect(cnpj).toBeNull();
    });
    
    it('deve validar corretamente o CNPJ 82.494.674/0001-54', function() {
        var cnpj = KzCnpjValidator.validate(new Control('82.494.674/0001-54'));
        expect(cnpj).toBeNull();
    });
    
    it('deve retornar inválido para o CNPJ 12345678912345', function() {
        var cnpj = KzCnpjValidator.validate(new Control('12345678912345'));        
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 00000000000000', function() {
        var cnpj = KzCnpjValidator.validate(new Control('00000000000000'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 11111111111111', function() {
        var cnpj = KzCnpjValidator.validate(new Control('11111111111111'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 22222222222222', function() {
        var cnpj = KzCnpjValidator.validate(new Control('22222222222222'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 33333333333333', function() {
        var cnpj = KzCnpjValidator.validate(new Control('33333333333333'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 44444444444444', function() {
        var cnpj = KzCnpjValidator.validate(new Control('44444444444444'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 55555555555555', function() {
        var cnpj = KzCnpjValidator.validate(new Control('55555555555555'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 66666666666666', function() {
        var cnpj = KzCnpjValidator.validate(new Control('66666666666666'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 77777777777777', function() {
        var cnpj = KzCnpjValidator.validate(new Control('77777777777777'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 88888888888888', function() {
        var cnpj = KzCnpjValidator.validate(new Control('88888888888888'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para o CNPJ 99999999999999', function() {
        var cnpj = KzCnpjValidator.validate(new Control('99999999999999'));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para CNPJ vazio', function() {
        var cnpj = KzCnpjValidator.validate(new Control(''));
        expect(cnpj).toEqual({ 'cnpj': true });
    });
    
    it('deve retornar inválido para CNPJ undefined', function() {
        var cnpj = KzCnpjValidator.validate(new Control(undefined));
        expect(cnpj).toEqual({ 'cnpj': true });
    });

});