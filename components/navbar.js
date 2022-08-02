import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li> <Link href="#about"><a>About</a></Link></li>
                <li> <Link href="#projects"><a>Projects</a></Link></li>
                <li> <Link href="#contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;