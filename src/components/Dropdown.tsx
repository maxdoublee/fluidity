import React, { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import { IconButton } from "./IconButton";

const DropdownWrapper = styled.div`
    position: relative;
    height: 40px;
`;

const DropdownButton = styled(IconButton)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    width: calc(100% + 4px);
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    padding: 10px 20px;
    border: 2px solid var(--default-color);
    background-color: var(--bg-color);

    :enabled:hover, :focus, :hover {
        animation: none;
        opacity: 1;
    }
	font-size: initial;
    z-index: 10;
`;

// Update DropdownItem here:
const DropdownItem = styled(IconButton)`
    margin: 0;
    padding: 10px 20px;
    justify-content: flex-start;
    font-size: initial;
    color: var(--default-color); /* Ensure consistent color */
    font-weight: 500; /* Set a specific font weight */
    
    :enabled:hover {
        animation: none; /* Remove any animation on hover */
        opacity: 1;
        background-color: var(--default-color);
        color: var(--bg-color);
    }

    /* Apply font smoothing settings */
    text-shadow: none; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: none; /* Remove transition to prevent movement */
`;

const DropdownPopup = styled.div<{ height: number, items: number }>`
    height: ${({ height }) => height + "px"};
    max-height: 240px; /* Set max height to fit six items */
    position: absolute;
    left: 4px;
    top: 40px;
    width: calc(100% - 3px);
    background-color: var(--bg-color);
    overflow-y: auto; /* Enable scrolling */
    z-index: 9;
    animation: box-flicker 0.01s ease 0s infinite alternate;
    transition: ${({ items }) => items * 0.1 + "s"};
    > div {
        padding-top: 5px;
        display: flex;
        flex-direction: column;
    }
`;

type props = {
    items: { label: string, value: string }[],
    onChange: (value: string) => void,
    value: string,
}

export const Dropdown = ({ items, onChange, value }: props) => {
    const [popupHeight, setPopupHeight] = useState(0);
    const [hasBlur, setHasBlur] = useState(false);

    const getCurrentLabel = () => {
        const current = items.find((item) => item.value === value);
        return current ? current.label : value;
    };

    const handleChange = (value: string) => {
        onChange(value);
        setHasBlur(false);
    };

    return (
        <DropdownWrapper>
            <DropdownButton
                text={getCurrentLabel()}
                icon={faAngleDown}
                onClick={() => setHasBlur(!hasBlur)}
            />
            <DropdownPopup height={hasBlur ? popupHeight : 0} items={items.length}>
                <div
                    onBlur={() => setHasBlur(false)}
                    ref={(elem) => setPopupHeight(elem?.clientHeight || 0)}
                >
                    {items.map((item) => (
                        <DropdownItem
                            onClick={() => handleChange(item.value)}
                            key={item.value}
                            text={item.label}
                        />
                    ))}
                </div>
            </DropdownPopup>
        </DropdownWrapper>
    );
};