import React, { useEffect, useRef, useState } from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as Settings from "../Settings/settingsHandler";

// Import the icons as before
import ecosia from "../../data/pictures/ecosia.svg";
import google from "../../data/pictures/google.svg";
import duckduckgo from "../../data/pictures/duckduckgo.svg";
import qwant from "../../data/pictures/qwant.svg";
import perplexity from "../../data/pictures/perplexity.svg";

interface SearchbarProps {
    theme: {
        searchPlaceholder?: string;
    };
}

const StyledSearchbarContainer = styled.div`
    position: absolute;
    left: calc(100px - 2.9rem - 10px);
    right: 100px;
    bottom: 40px;
    height: min-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const StyledSearchbar = styled.input<{ scrollDistance: number }>`
    width: 100%;
    font-size: 30pt;
    background-color: rgba(0,0,0,0);
    color: var(--default-color);
    transition: .3s;
    border: none;
    border-bottom: 2px solid var(--default-color);
    opacity: 0.3;

    ::placeholder {
        color: var(--default-color);
        animation: ${({ scrollDistance }) => scrollPlaceholder(scrollDistance)} 14s linear infinite;
    }

    :hover, :focus {
        opacity: 1;
        outline: none;
    }
`;

const SearchIcon = styled.div<{ src: string }>`
    height: 2.9rem;
    width: 3.1rem;
    margin: auto 10px auto 0;
    background: var(--default-color);
    mask-size: cover;
    mask-image: url(${({ src }) => src});
`;

// Keyframes function to handle the scroll animation with pauses
const scrollPlaceholder = (scrollDistance: number) => keyframes`
    0%, 15% { text-indent: 0; } /* Pause at the beginning */
    50% { text-indent: -${scrollDistance}px; } /* Scroll to the end */
    65%, 100% { text-indent: -${scrollDistance}px; } /* Pause at the end */
`;

export const Searchbar: React.FC<SearchbarProps> = ({ theme }) => {
    const searchSettings = Settings.Search.getWithFallback();
    const engine: string = searchSettings?.engine || "google.com/";
    const placeholderText = Settings.Search.getWithFallback().placeholder || theme.searchPlaceholder || "Default placeholder...";

    const [scrollDistance, setScrollDistance] = useState(0);
    const placeholderRef = useRef<HTMLSpanElement>(null);
    const searchbarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (placeholderRef.current && searchbarRef.current) {
            const placeholderWidth = placeholderRef.current.offsetWidth;
            const searchbarWidth = searchbarRef.current.offsetWidth;
            setScrollDistance(Math.max(0, placeholderWidth - searchbarWidth));
        }
    }, [placeholderText]);

    let searchSymbol = null;
    if (engine.startsWith("duckduckgo"))
        searchSymbol = duckduckgo;
    else if (engine.startsWith("qwant"))
        searchSymbol = qwant;
    else if (engine.startsWith("ecosia"))
        searchSymbol = ecosia;

    const redirectToSearch = (query: string) => {
        if (searchSettings?.fastForward[query])
            window.location.href = searchSettings.fastForward[query];
        else
            window.location.href = "https://" + engine + "?q=" + query;
    }

    return (
        <StyledSearchbarContainer>
            {searchSymbol && <SearchIcon src={searchSymbol} />}
            <StyledSearchbar
                placeholder={placeholderText}
                type="input"
                onKeyUp={e => e.which === 13 && redirectToSearch(e.currentTarget.value)}
                autoFocus={true}
                scrollDistance={scrollDistance}
                ref={searchbarRef}
            />
            {/* Hidden span to measure placeholder text width */}
            <span ref={placeholderRef} style={{ visibility: "hidden", position: "absolute", whiteSpace: "nowrap", fontSize: "30pt" }}>
                {placeholderText}
            </span>
        </StyledSearchbarContainer>
    );
};