import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    {
        name: 'Bluewash',
        description: 'Plataforma Corporativa para Gestão Financeira e Operacional de Lavanderias Self-service.',
        url: 'https://www.bluewash.com.br',
        image: 'assets/images/projects/image.png',
        stack: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Kafka']
    },
    {
        name: 'Azulstore',
        description: 'Plataforma de E-commerce para venda de produtos online.',
        url: 'https://www.azulstore.com.br',
        image: 'assets/images/projects/image.png',
        stack: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'RabbitMQ']
    }
];
