import { FormEvent } from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import logo from '../assets/react.svg'

export function Header() {
    const [searchParams, setSearchParams] = useSearchParams();
    function handleSearchSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // use the JavaScript FormData interface to get the value of the search field
        const formData = new FormData (e.currentTarget);

        // use a type assertion to set the type of the search field value to a string
        const search = formData.get('search') as string;
        
        setSearchParams({search})
    }

    return (
        <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
            <form 
            className="relative text-right"
            onSubmit={handleSearchSubmit}
            >
                <input 
                type="search" 
                name="search" 
                placeholder="Search"
                defaultValue={searchParams.get('search') ?? ''}
                className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
                />

            </form>
            <Link to='/'>
                <img 
                src={logo}
                alt="Logo" 
                className="inline-block h-20"
                />
            </Link>

            <Link to=''>
                <h1 className="text-2xl">React Tools</h1>
            </Link>

            <nav>
                <NavLink 
                to='products'
                className={({isActive}) => 
                            `
                            text-white no-underline p-1 pb-0.5 border-solid border-b-2
                            ${isActive ? 'border-white' : 'border-transparent'}
                            
                            `
                            }
                >
                    Products
                </NavLink>
            </nav>
        </header>
    )
}