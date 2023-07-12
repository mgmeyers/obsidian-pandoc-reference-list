import React from 'react';
import { StylesConfig } from 'react-select';

import { cslList } from '../bib/cslList';
import { langList } from '../bib/cslLangList';

export const customSelectStyles: StylesConfig = {
  input: (provided) => {
    return {
      ...provided,
      color: 'var(--text-normal)',
    };
  },
  singleValue: (provided) => {
    return {
      ...provided,
      color: 'var(--text-normal)',
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      backgroundColor: 'var(--background-modifier-form-field)',
      color: 'var(--text-normal)',
    };
  },
  option: (provided, { isFocused, isSelected }) => {
    return {
      ...provided,
      backgroundColor: isFocused
        ? `var(--interactive-accent)`
        : isSelected
        ? `var(--background-modifier-hover)`
        : undefined,
      color: isFocused ? `var(--text-on-accent)` : 'var(--text-normal)',
    };
  },
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: 'var(--background-modifier-form-field)',
      color: 'var(--text-normal)',
      borderColor: state.isFocused
        ? 'var(--interactive-accent)'
        : 'var(--background-modifier-border)',
      boxShadow: state.isFocused
        ? '0 0 0 1px var(--interactive-accent)'
        : 'none',
      ':hover': {
        borderColor: state.isFocused
          ? 'var(--interactive-accent)'
          : 'var(--background-modifier-border)',
      },
    };
  },
};

export function searchCSL(inputValue: string) {
  return cslList.search(inputValue).map((res) => res.item);
}

let loadCSLOptionsDB = 0;

export function loadCSLOptions(
  inputValue: string,
  callback: (options: Array<{ value: string; label: string }>) => void
) {
  if (inputValue === '') {
    callback([]);
  } else {
    activeWindow.clearTimeout(loadCSLOptionsDB);
    loadCSLOptionsDB = activeWindow.setTimeout(() => {
      callback(searchCSL(inputValue));
    }, 150);
  }
}

export function searchCSLLangs(inputValue: string) {
  return langList.search(inputValue).map((res) => res.item);
}

let loadCSLLangOptionsDB = 0;

export function loadCSLLangOptions(
  inputValue: string,
  callback: (
    options: Array<{ value: string; label: string; url: string }>
  ) => void
) {
  if (inputValue === '') {
    callback([]);
  } else {
    activeWindow.clearTimeout(loadCSLLangOptionsDB);
    loadCSLLangOptionsDB = activeWindow.setTimeout(() => {
      callback(searchCSLLangs(inputValue));
    }, 150);
  }
}

export function NoOptionMessage() {
  return <span>Type to search CSL styles</span>;
}

export function NoFileOptionMessage() {
  return <span>Type to search</span>;
}
