import React, { useEffect, useRef, useState } from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as Settings from "../Settings/settingsHandler";

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

const scrollText = (scrollDistance: number, duration: number) => keyframes`
    0%, 20% { 
        transform: translateX(0); 
    }
    50%, 70% { 
        transform: translateX(-${scrollDistance}px); 
    }
    90%, 100% { 
        transform: translateX(0); 
    }
`;

const StyledSearchbar = styled.input`
    width: 100%;
    font-size: 30pt;
    background-color: rgba(0,0,0,0);
    color: var(--default-color);
    transition: .3s;
    border: none;
    border-bottom: 2px solid var(--default-color);
    opacity: 0.3;
    
    :hover, :focus {
        opacity: 1;
        outline: none;
    }
`;

const ScrollingPlaceholder = styled.span<{ scrollDistance: number, duration: number }>`
    position: absolute;
    color: var(--default-color);
    font-size: 30pt;
    pointer-events: none;
    white-space: nowrap;
    opacity: 0.3;
    animation: ${({ scrollDistance, duration }) => scrollText(scrollDistance, duration)} ${props => props.duration}s linear infinite;
`;

const SearchIcon = styled.div<{ src: string }>`
    height: 2.9rem;
    width: 3.1rem;
    margin: auto 10px auto 0;
    background: var(--default-color);
    mask-size: cover;
    mask-image: url(${({ src }) => src});
`;

export const Searchbar: React.FC<SearchbarProps> = ({ theme }) => {
    const searchSettings = Settings.Search.getWithFallback();
    const engine: string = searchSettings?.engine || "google.com/";
    const placeholderText = searchSettings.placeholder || theme.searchPlaceholder || "Default placeholder...";

    const [scrollDistance, setScrollDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const placeholderRef = useRef<HTMLSpanElement>(null);
    const searchbarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (placeholderRef.current && searchbarRef.current) {
            const placeholderWidth = placeholderRef.current.offsetWidth;
            const searchbarWidth = searchbarRef.current.offsetWidth;

            // Calculate distance and duration based on text length
            const calculatedScrollDistance = Math.max(0, placeholderWidth - searchbarWidth);
            const calculatedDuration = Math.max(10, (calculatedScrollDistance / 50)); // Adjusted for comfortable speed

            setScrollDistance(calculatedScrollDistance);
            setDuration(calculatedDuration);
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
                type="input"
                onKeyUp={e => e.which === 13 && redirectToSearch(e.currentTarget.value)}
                autoFocus={true}
                ref={searchbarRef}
            />
            <ScrollingPlaceholder scrollDistance={scrollDistance} duration={duration} ref={placeholderRef}>
                {placeholderText}
            </ScrollingPlaceholder>
        </StyledSearchbarContainer>
    );
};