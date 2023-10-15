import nc from 'next-connect';
import dbconnect from '@/backend/config/dbConnect';
import { NewProduct } from '@/backend/controllers/productController';

const handler = nc();
dbconnect();
handler.post(NewProduct);
export default handler;
