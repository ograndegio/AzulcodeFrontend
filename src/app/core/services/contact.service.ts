import { Injectable } from '@angular/core';
import { ContactFormModel } from '../models/contact-form.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  createMailtoLink(payload: ContactFormModel): string {
    const body = [
      `Nome: ${payload.name}`,
      `E-mail: ${payload.email}`,
      `Empresa: ${payload.company?.trim() || 'Não informada'}`,
      '',
      payload.message
    ].join('\n');

    return `mailto:contato@azulcode.com.br?subject=${encodeURIComponent(`Contato pelo site - ${payload.name}`)}&body=${encodeURIComponent(body)}`;
  }
}
