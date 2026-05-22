import { Router } from 'express';
import * as PageController from '../controllers/pageControllers';
import * as SearchController from '../controllers/searchControllers';


const router = Router();

router.get('/', (req, res) => {
    res.send("home");
//    const port = process.env.PORT || 3000;
//    res.send(`<h1>Servidor Funcionando!</h1><p>Sistema operando na porta: <b>${port}</b></p>`);
});

router.get('/home', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishers);

router.get('/search', SearchController.search);

export default router;