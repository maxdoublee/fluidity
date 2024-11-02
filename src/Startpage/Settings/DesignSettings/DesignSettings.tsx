import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { faPlus, faMinus, faSave, faRandom } from '@fortawesome/free-solid-svg-icons';

import { StyledSettingsContent, SettingElement, SettingsButton, SettingsLabel } from "../SettingsWindow";
import { OptionSlider } from "../../../components/OptionSlider";
import { Dropdown } from "../../../components/Dropdown";
import { OptionTextInput } from "../../../components/OptionTextInput";
import { ColorPicker } from "../../../components/ColorPicker";
import { Theme, colorsType } from '../../../data/data';

import { images } from "../../../data/data";

const DesignPreview = styled.div<{ name: string, colors: colorsType }>`
    /* Styling for DesignPreview */
    ${({ colors }) => Object.keys(colors).map((key) => key + `:` + colors[key]).join(";")};
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    border: 2px solid var(--accent-color);
    width: calc(100% - 400px);
    height: 100%;
    position: relative;
    ::before {
        content: "${({ name }) => name}";
        color: var(--accent-color);
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 0.8rem;
    }
    ::after {
        content: "Design Preview";
        color: var(--accent-color);
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 0.8rem;
    }
`;

const ShuffleButton = styled(SettingsButton)`
    margin: 10px;
`;

const ImagePreview = styled.img`
    margin: 10px; 
    height: 300px;
    width: 300px;
    border: 1px solid var(--default-color);
    padding: 5px;
    object-fit:cover;
    animation:circling-shadow-small 4s ease 0s infinite normal;
`;

const StyledAccordionPreview = styled.div<{ colorVar: string }>`
    border: 4px solid ${({ colorVar }) => `var(${colorVar})`};
    height: 300px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 100%;
        background-color: ${({ colorVar }) => `var(${colorVar})`};
    }
`;

const SectionDivider = styled.div`
    width:calc(100% - 80px);
    padding: 20px 40px;
    position: relative;
    :before {
        content:"";
        width:calc(100% - 80px);
        position: absolute;
    }
`;

const AccordionPreviewTitle = styled.h2`
    transform: rotate(90deg);
    min-width: max-content;
    color: var(--bg-color);
    transition: .5s;
    letter-spacing: 5px;
`;

const AccordionPreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 10px;
    > * {
        margin-left: 30px;
    }
`;

export const SettingButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AccordionPreview = ({ title, colorVar }: { title: string, colorVar: string }) => {
    return (
        <StyledAccordionPreview colorVar={colorVar} >
            <div className={"wave"} />
            <AccordionPreviewTitle>{title}</AccordionPreviewTitle>
        </StyledAccordionPreview>
    );
}

type props = {
    design: Theme;
    setDesign: (design: Theme) => void;
    themes: Theme[];
    setThemes: (themes: Theme[]) => void;
}

export const DesignSettings = ({ design, setDesign, themes, setThemes }: props) => {
    const [isNewDesign, setIsNewDesign] = useState(false);

    const defaultThemes = themes.slice(0, 6); // First six themes as default
    const userAddedThemes = themes.slice(6); // Themes added after the first six

    const setName = (name: string) => setDesign({ ...design, name });
    const setColors = (colors: colorsType) => setDesign({ ...design, colors });
    const setImage = (image: string) => setDesign({ ...design, image });

    // Function to shuffle theme to a random default theme
    const shuffleDefaultTheme = () => {
        const randomTheme = defaultThemes[Math.floor(Math.random() * defaultThemes.length)];
        setDesign(randomTheme);
    };

    // Function to shuffle theme to a random user-added theme
    const shuffleUserAddedTheme = () => {
        if (userAddedThemes.length > 0) {
            const randomTheme = userAddedThemes[Math.floor(Math.random() * userAddedThemes.length)];
            setDesign(randomTheme);
        } else {
            alert("No user-added themes available.");
        }
    };

    useEffect(() => {
        const themeExists = themes.some((theme) => theme.name === design.name);
        setIsNewDesign(!themeExists);
    }, [design, themes]);

    const themeChange = (themeName: string) => {
        const newTheme = themes.find((theme) => theme.name === themeName);
        if (newTheme) setDesign(newTheme);
    };

    const addTheme = (newTheme: Theme) => {
        setThemes([...themes.filter((theme) => theme.name !== newTheme.name), newTheme]);
    };

    const removeTheme = (themeName: string) => {
        setThemes(themes.filter((theme) => theme.name !== themeName));
        if (themes.length > 0) themeChange(themes[0].name);
    };

    const themeExists = (themeName: string) => {
        return themes.some((theme) => theme.name === themeName);
    };

    return (
        <>
            <div>
                <StyledSettingsContent>
                    {/* Shuffle Buttons */}
                    <SettingsLabel>Shuffle Themes</SettingsLabel>
                    <SettingElement>
                        <ShuffleButton
                            onClick={shuffleDefaultTheme}
                            text="Shuffle Default Themes"
                            icon={faRandom}
                        />
                        <ShuffleButton
                            onClick={shuffleUserAddedTheme}
                            text="Shuffle User-Added Themes"
                            icon={faRandom}
                        />
                    </SettingElement>

                    {/* Theme selection and controls */}
                    <SettingsLabel>Theme</SettingsLabel>
                    <SettingElement>
                        {themes && (
                            <Dropdown
                                value={design.name}
                                items={themes.map((theme) => ({ label: theme.name, value: theme.name }))}
                                onChange={themeChange}
                            />
                        )}
                    </SettingElement>
                    <SettingElement>
                        <OptionTextInput
                            value={design.name}
                            onChange={setName}
                            placeholder={"Theme name"}
                        />
                    </SettingElement>

                    <SectionDivider />

                    <SettingElement>
                        <OptionTextInput
                            value={design.image}
                            onChange={setImage}
                            placeholder={"Image URL"}
                        />
                        <OptionSlider
                            currentValue={design.image}
                            values={images}
                            onChange={setImage}
                        />
                    </SettingElement>

                    <SectionDivider />

                    <SettingElement>
                        <ColorPicker colors={design.colors} setColors={setColors} />
                    </SettingElement>
                    <SectionDivider />
                    <SettingElement>
                        <SettingButtonRow>
                            <SettingsButton
                                onClick={() => addTheme(design)}
                                text={!themeExists(design.name) ? "Add Theme" : "Save Theme"}
                                icon={!themeExists(design.name) ? faPlus : faSave}
                                disabled={!isNewDesign}
                            />
                            <SettingsButton
                                onClick={() => removeTheme(design.name)}
                                text="Remove Theme"
                                icon={faMinus}
                                disabled={!themeExists(design.name)}
                            />
                        </SettingButtonRow>
                    </SettingElement>
                </StyledSettingsContent>
            </div>

            {/* Theme preview section */}
            <DesignPreview name={design.name} colors={design.colors}>
                <ImagePreview src={design.image} />
                <AccordionPreviewContainer>
                    <AccordionPreview title="Default" colorVar="--default-color" />
                    <AccordionPreview title="Accent" colorVar="--accent-color" />
                    <AccordionPreview title="Accent 2" colorVar="--accent-color2" />
                </AccordionPreviewContainer>
            </DesignPreview>
        </>
    );
};

// Utility function to check if themes are equal
const themeEquals = (theme1: Theme, theme2: Theme) => {
    return theme1.name === theme2.name &&
        theme1.image === theme2.image &&
        Object.keys(theme1.colors).every((key) => theme1.colors[key] === theme2.colors[key]);
};