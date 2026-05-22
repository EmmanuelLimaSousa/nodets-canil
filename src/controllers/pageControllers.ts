import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('home no controller!');
}

export const dogs = (req: Request, res: Response) => {
    res.send('Área dos Cachorros');
}

export const cats = (req: Request, res: Response) => {
    res.send('Área dos Gatos');
}

export const fishers = (req: Request, res: Response) => {
    res.send('Área dos Peixes');
}