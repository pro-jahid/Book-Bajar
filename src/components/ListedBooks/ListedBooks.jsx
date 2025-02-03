import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList} from '../Utilities/AddToDB';
import Book from '../Home/Book/Book';
const ListedBooks = () => {

    const [readList, setReadList ] = useState([]);

    const allBooks = useLoaderData();
    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadLIstInt = storedReadList.map(id =>parseInt(id));

        console.log(storedReadLIstInt,storedReadLIstInt,allBooks)

        const readBookLIst = allBooks.filter(book => storedReadLIstInt.includes(book.bookId))
        setReadList(readBookLIst)
    },[])

    return (
        <div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>
                    <TabPanel>
                       
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            readList.map(book => <Book book={book} key={book.id}></Book>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel><h1>Wish List </h1></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;