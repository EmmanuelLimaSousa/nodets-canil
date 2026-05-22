import { Router } from 'express';
import * as PageController from '../../../src/controllers/pageControllers';
import * as SearchController from '../../../src/controllers/searchControllers';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishers);

router.get('/search', SearchController.search);





router.get('/', (req, res) => {
    const port = process.env.PORT || 3000;
    res.send(`<h1>Servidor Funcionando!</h1><p>Configurado na porta: <b>${port}</b></p>`);
});

export default router;
