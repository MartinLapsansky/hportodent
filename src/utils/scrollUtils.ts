import type {NavigateFunction} from "react-router-dom";

export const handleScrollToSection = (
    id: string,
    navigate: NavigateFunction,
    location: { pathname: string },
    setMenuOpen?: (open: boolean) => void
) => {
    const scrollToElement = () => {
        const section = document.getElementById(id);
        const header = document.querySelector('.header_section') as HTMLElement;

        if (section && header) {
            const headerHeight = header.offsetHeight;
            const yOffset = -headerHeight;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (id === 'rezervacia' && setMenuOpen) {
        navigate("/hportodent/rezervacia");
        setMenuOpen(false);
        return;
    }

    if (id === 'domov') {
        navigate("/hportodent");
    }

    if (location.pathname !== "/hportodent") {
        navigate("/hportodent", { replace: false });
        setTimeout(scrollToElement, 100);
    } else {
        scrollToElement();
    }
    if (setMenuOpen) {
        setMenuOpen(false);
    }
};