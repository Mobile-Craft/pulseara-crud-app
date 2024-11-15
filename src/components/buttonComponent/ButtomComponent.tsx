import React from 'react';
import pencilIcon from '../../assets/pencil.svg'
interface ButtonComponentProps {
    className?: string;
    onClick?: () => void;
    icon?: string;
    iconAlt?: string;
    iconWidth?: number;
    iconHeight?: number;
    buttonText?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    className = "primary-button edit",
    onClick = () => { },
    icon = pencilIcon,
    iconAlt = "Pencil",
    iconWidth = 13,
    iconHeight = 13,
    buttonText = "Editar procedimientos",
}) => {
    return (
        <button className={className} onClick={onClick}>
            <img src={icon} alt={iconAlt} width={iconWidth} height={iconHeight} />
            {buttonText}
        </button>
    );
};

export default ButtonComponent;
