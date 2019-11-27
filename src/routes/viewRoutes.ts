import {Router, Request, Response, NextFunction} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).render('layout', {
    title: 'TripMaster',
      });
});

router.get('/login', (req: Request, res: Response) => {
  res.status(200).render('login', {
    title: 'TripMaster'
  });
});

router.get('/signup', (req: Request, res: Response) => {
  res.status(200).render('signup', {
    title: 'TripMaster'
  });
});

router.get('/forgot', (req: Request, res: Response) => {
  res.status(200).render('forgot', {
    title: 'Reset password'
  });
});

router.get('/404', (req: Request, res: Response) => {
  res.status(200).render('404', {
    title: '404'
  });
});

router.get('/account', (req: Request, res: Response) => {
  res.status(200).render('account', {
    title: 'My Account',
      });
});

router.get('/add-trip', (req: Request, res: Response) => {
  res.status(200).render('editTrip', {
    title: 'Add Trip',
      });
});

router.get('/trips', (req: Request, res: Response) => {
  res.status(200).render('trips', {
    title: 'Your Trips',
      });
});

router.get('/:slug',  (req: Request, res: Response) => {
  const { slug } = req.params;

  res.status(200).render('trip', {
    title: slug
  });
});

router.get('/:slug/itinerary/',  (req: Request, res: Response) => {
  res.status(200).render('itinerary', {
    title: 'Your Itinerary'
  });
});

router.get('/:slug/itinerary/add',  (req: Request, res: Response) => {
  res.status(200).render('editStop', {
    title: 'Add Trip Stop'
  });
});

router.get('/:slug/expenses/add',  (req: Request, res: Response) => {
  res.status(200).render('editExpense', {
    title: 'Add Expense'
  });
});

router.get('/:slug/expenses',(req: Request, res: Response) => {
  res.status(200).render('expenses', {
    title: 'Trip Expenses'
  });
});

router.get('/:slug/todo/add',  (req: Request, res: Response) => {
  res.status(200).render('editTodo', {
    title: 'Add Todo'
  });
});

router.get('/:slug/todo',(req: Request, res: Response) => {
  res.status(200).render('todo', {
    title: 'Todo List'
  });
});

export default router;