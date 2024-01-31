// import { FormEvent } from "react";
import { NavLink, Link, useSearchParams, Form } from "react-router-dom";
import logo from '../assets/react.svg'
import { User } from "../api/authenticate";

type Props = {
    user: undefined | User;
    onSignInClick: () => void;
    loading: boolean;
}



export function Header({
    user,
    onSignInClick,
    loading,
}: Props) {
    
    
    return (
        <header className="text-center text-slate-50 bg-slate-900 p-5">
            <div className="flex flex-row gap-5 justify-between">
            <NavBar/>

            <div className="flex flex-row gap-5">
                <div>
                    {
                        user ? (
                            <span className="ml-auto font-bold">
                                {user.name} has singed in
                            </span>
                        ) : (
                            <button
                            onClick={onSignInClick}
                            disabled={loading}
                            className="whitespace-nowrap inline-flex items-center
                            justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-md
                            shadow-sm text-base font-medium text-white bg-slate-500 hover:bg-slate-600"
                            >
                                {loading ? '....': 'Sign in'}
                            </button>
                        )
                    }

                </div>
                <SearchForm/>
            </div>

            
            </div>
        </header>
    )
}

function SearchForm () {
    const [searchParams] = useSearchParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    // const navigate = useNavigate();
    // function handleSearchSubmit (e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     // use the JavaScript FormData interface to get the value of the search field
    //     const formData = new FormData (e.currentTarget);

    //     // use a type assertion to set the type of the search field value to a string
    //     const search = formData.get('search') as string;

    //     // setSearchParams({search})
    //     navigate(`/products/?search=${search}`)
    // }


    return (
        <Form 
        className="relative text-right"
        action="/products"
        // onSubmit={handleSearchSubmit}
        >
            <input 
            type="search" 
            name="search" 
            placeholder="Search"
            defaultValue={searchParams.get('search') ?? ''}
            className=" rounded py-2 px-3 text-gray-700"
            />

        </Form>
    )
}



function NavBar() {
    return (
        <nav className="flex flex-row gap-4 justify-start">
            <Link to='/'>
                <img 
                src={logo}
                alt="Logo" 
                className="h-8"
                />
            </Link>
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
            <NavLink 
            to='admin'
            className={({isActive}) => 
                        `
                        text-white no-underline p-1 pb-0.5 border-solid border-b-2
                        ${isActive ? 'border-white' : 'border-transparent'}
                        
                        `
                        }
            >
                Admin
            </NavLink>
            <NavLink 
            to='contact'
            className={({isActive}) => 
                        `
                        text-white no-underline p-1 pb-0.5 border-solid border-b-2
                        ${isActive ? 'border-white' : 'border-transparent'}
                        
                        `
                        }
            >
                Contact
            </NavLink>
        </nav>
    )
}