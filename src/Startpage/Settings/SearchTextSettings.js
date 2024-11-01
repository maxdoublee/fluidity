import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as Settings from '../Settings/settingsHandler';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px; // Adds space between label and input box
    width: 100%;
`;

const StyledInput = styled.input`
    width: 95%; 
    padding: 10px;
    font-size: 1rem;
    color: var(--default-color);
    background-color: var(--bg-color);
    border: 1px solid var(--default-color);
`;

export const SearchTextSettings = ({ searchSettings, setSearchSettings }) => {
    const [placeholder, setPlaceholder] = useState(searchSettings.placeholder || "");

    const handlePlaceholderChange = (e) => {
        const newPlaceholder = e.target.value;
        setPlaceholder(newPlaceholder);
        const updatedSettings = { ...searchSettings, placeholder: newPlaceholder };
        setSearchSettings(updatedSettings); // Update state
        Settings.Search.set(updatedSettings); // Save to localStorage
    };

    return (
        <StyledContainer>
            <label>Search Placeholder Text</label>
            <StyledInput
                type="text"
                value={placeholder}
                onChange={handlePlaceholderChange}
                placeholder=""
            />
        </StyledContainer>
    );
};