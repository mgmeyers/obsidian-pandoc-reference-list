import Fuse from 'fuse.js';

export const cslListRaw = [
  {
    label: 'Academy of Management Review',
    id: 'academy-of-management-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/academy-of-management-review.csl',
  },
  {
    label: 'Accident Analysis and Prevention',
    id: 'accident-analysis-and-prevention',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/accident-analysis-and-prevention.csl',
  },
  {
    label: 'ACI Materials Journal',
    id: 'aci-materials-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aci-materials-journal.csl',
  },
  {
    label: 'ACM SIG Proceedings ("et al." for 15+ authors)',
    id: 'acm-sig-proceedings-long-author-list',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sig-proceedings-long-author-list.csl',
  },
  {
    label: 'ACM SIG Proceedings ("et al." for 3+ authors)',
    id: 'acm-sig-proceedings',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sig-proceedings.csl',
  },
  {
    label: 'ACM SIGCHI Proceedings - Extended Abstract Format',
    id: 'acm-sigchi-proceedings-extended-abstract-format',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sigchi-proceedings-extended-abstract-format.csl',
  },
  {
    label: 'ACM SIGCHI Proceedings (2016)',
    id: 'acm-sigchi-proceedings',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sigchi-proceedings.csl',
  },
  {
    label: 'ACM SIGGRAPH',
    id: 'acm-siggraph',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acm-siggraph.csl',
  },
  {
    label: 'ACME: An International Journal for Critical Geographies',
    id: 'acme-an-international-journal-for-critical-geographies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acme-an-international-journal-for-critical-geographies.csl',
  },
  {
    label: 'Acta Amazonica',
    id: 'acta-amazonica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-amazonica.csl',
  },
  {
    label: 'Acta Anaesthesiologica Scandinavica',
    id: 'acta-anaesthesiologica-scandinavica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-anaesthesiologica-scandinavica.csl',
  },
  {
    label: 'Acta Anaesthesiologica Taiwanica',
    id: 'acta-anaesthesiologica-taiwanica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-anaesthesiologica-taiwanica.csl',
  },
  {
    label: 'Acta Botanica Croatica',
    id: 'acta-botanica-croatica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-botanica-croatica.csl',
  },
  {
    label: 'Acta Chiropterologica',
    id: 'acta-chiropterologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-chiropterologica.csl',
  },
  {
    label: 'Acta chirurgiae orthopaedicae et traumatologiae Čechoslovaca',
    id: 'acta-chirurgiae-orthopaedicae-et-traumatologiae-cechoslovaca',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-chirurgiae-orthopaedicae-et-traumatologiae-cechoslovaca.csl',
  },
  {
    label: 'Acta hydrotechnica',
    id: 'acta-hydrotechnica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-hydrotechnica.csl',
  },
  {
    label: 'Acta Ichthyologica et Piscatoria',
    id: 'acta-ichthyologica-et-piscatoria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-ichthyologica-et-piscatoria.csl',
  },
  {
    label: 'Acta Médica Peruana',
    id: 'acta-medica-peruana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-medica-peruana.csl',
  },
  {
    label: 'Acta Naturae',
    id: 'acta-naturae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-naturae.csl',
  },
  {
    label: 'Acta Neurobiologiae Experimentalis',
    id: 'acta-neurobiologiae-experimentalis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-neurobiologiae-experimentalis.csl',
  },
  {
    label: 'Acta Neurochirurgica',
    id: 'acta-neurochirurgica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-neurochirurgica.csl',
  },
  {
    label: 'Acta Ophthalmologica',
    id: 'acta-ophthalmologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-ophthalmologica.csl',
  },
  {
    label: 'Acta Ornithologica',
    id: 'acta-ornithologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-ornithologica.csl',
  },
  {
    label: 'Acta Orthopædica Belgica',
    id: 'acta-orthopaedica-belgica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-orthopaedica-belgica.csl',
  },
  {
    label: 'Acta Orthopaedica',
    id: 'acta-orthopaedica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-orthopaedica.csl',
  },
  {
    label: 'Acta Paediatrica',
    id: 'acta-paediatrica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-paediatrica.csl',
  },
  {
    label: 'Acta Palaeontologica Polonica',
    id: 'acta-palaeontologica-polonica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-palaeontologica-polonica.csl',
  },
  {
    label: 'Acta Pharmaceutica Sinica B',
    id: 'acta-pharmaceutica-sinica-b',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-pharmaceutica-sinica-b.csl',
  },
  {
    label: 'Acta Pharmaceutica',
    id: 'acta-pharmaceutica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-pharmaceutica.csl',
  },
  {
    label: 'Acta Philosophica',
    id: 'acta-philosophica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-philosophica.csl',
  },
  {
    label: 'Acta Physica Sinica (物理学报)',
    id: 'acta-physica-sinica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-physica-sinica.csl',
  },
  {
    label: 'Acta Physiologica',
    id: 'acta-physiologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-physiologica.csl',
  },
  {
    label: 'Acta Polytechnica',
    id: 'acta-polytechnica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-polytechnica.csl',
  },
  {
    label: 'Acta Radiologica',
    id: 'acta-radiologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-radiologica.csl',
  },
  {
    label: 'Acta Scientiae Veterinariae',
    id: 'acta-scientiae-veterinariae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-scientiae-veterinariae.csl',
  },
  {
    label: 'Acta Societatis Botanicorum Poloniae',
    id: 'acta-societatis-botanicorum-poloniae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-societatis-botanicorum-poloniae.csl',
  },
  {
    label:
      'Acta Universitatis Agriculturae et Silviculturae Mendelianae Brunensis',
    id: 'acta-universitatis-agriculturae-et-silviculturae-mendelianae-brunensis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-universitatis-agriculturae-et-silviculturae-mendelianae-brunensis.csl',
  },
  {
    label:
      'Acta Universitatis Agriculturae Sueciae (Swedish University of Agricultural Sciences)',
    id: 'acta-universitatis-agriculturae-sueciae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-universitatis-agriculturae-sueciae.csl',
  },
  {
    label: 'Acta Zoologica Academiae Scientiarum Hungaricae',
    id: 'acta-zoologica-academiae-scientiarum-hungaricae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/acta-zoologica-academiae-scientiarum-hungaricae.csl',
  },
  {
    label: 'Administrative Science Quarterly',
    id: 'administrative-science-quarterly',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/administrative-science-quarterly.csl',
  },
  {
    label: 'Advanced Engineering Materials',
    id: 'advanced-engineering-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-engineering-materials.csl',
  },
  {
    label: 'Advanced Functional Materials',
    id: 'advanced-functional-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-functional-materials.csl',
  },
  {
    label: 'Advanced Healthcare Materials',
    id: 'advanced-healthcare-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-healthcare-materials.csl',
  },
  {
    label: 'Advanced Materials',
    id: 'advanced-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-materials.csl',
  },
  {
    label: 'Advanced Optical Materials',
    id: 'advanced-optical-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-optical-materials.csl',
  },
  {
    label: 'Advanced Pharmaceutical Bulletin',
    id: 'advanced-pharmaceutical-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advanced-pharmaceutical-bulletin.csl',
  },
  {
    label: "Advances in Alzheimer's Disease",
    id: 'advances-in-alzheimers-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advances-in-alzheimers-disease.csl',
  },
  {
    label: 'Advances in Complex Systems',
    id: 'advances-in-complex-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/advances-in-complex-systems.csl',
  },
  {
    label: 'Aerosol and Air Quality Research',
    id: 'aerosol-and-air-quality-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aerosol-and-air-quality-research.csl',
  },
  {
    label: 'Aerosol Science and Technology',
    id: 'aerosol-science-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aerosol-science-and-technology.csl',
  },
  {
    label: 'Aerospace Medicine and Human Performance',
    id: 'aerospace-medicine-and-human-performance',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aerospace-medicine-and-human-performance.csl',
  },
  {
    label: 'African Journal of Marine Science',
    id: 'african-journal-of-marine-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/african-journal-of-marine-science.csl',
  },
  {
    label: 'African Online Scientific Information Systems - Harvard',
    id: 'african-online-scientific-information-systems-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/african-online-scientific-information-systems-harvard.csl',
  },
  {
    label: 'African Online Scientific Information Systems - Vancouver',
    id: 'african-online-scientific-information-systems-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/african-online-scientific-information-systems-vancouver.csl',
  },
  {
    label: 'African Zoology',
    id: 'african-zoology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/african-zoology.csl',
  },
  {
    label: 'Afro-Ásia (Português - Brasil)',
    id: 'afro-asia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/afro-asia.csl',
  },
  {
    label: 'Age and Ageing',
    id: 'age-and-ageing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/age-and-ageing.csl',
  },
  {
    label: 'Ageing & Society',
    id: 'ageing-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ageing-and-society.csl',
  },
  {
    label: 'Aging and Disease',
    id: 'aging-and-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aging-and-disease.csl',
  },
  {
    label: 'Aging Cell',
    id: 'aging-cell',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aging-cell.csl',
  },
  {
    label: 'Aging',
    id: 'aging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aging.csl',
  },
  {
    label: 'Agora',
    id: 'agora',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/agora.csl',
  },
  {
    label: 'Agriculturae Conspectus Scientificus',
    id: 'agriculturae-conspectus-scientificus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/agriculturae-conspectus-scientificus.csl',
  },
  {
    label: 'AIB studi (Italiano)',
    id: 'aib-studi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aib-studi.csl',
  },
  {
    label: 'AIDS',
    id: 'aids',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aids.csl',
  },
  {
    label: 'AIMS Press',
    id: 'aims-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aims-press.csl',
  },
  {
    label:
      "Aix-Marseille Université - Département d'études asiatiques (Français)",
    id: 'aix-marseille-universite-departement-d-etudes-asiatiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aix-marseille-universite-departement-d-etudes-asiatiques.csl',
  },
  {
    label: "Al-Jami'ah - Journal of Islamic Studies",
    id: 'al-jamiah-journal-of-islamic-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/al-jamiah-journal-of-islamic-studies.csl',
  },
  {
    label: 'Alcohol and Alcoholism',
    id: 'alcohol-and-alcoholism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/alcohol-and-alcoholism.csl',
  },
  {
    label: 'Alcoholism: Clinical and Experimental Research',
    id: 'alcoholism-clinical-and-experimental-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/alcoholism-clinical-and-experimental-research.csl',
  },
  {
    label: 'Alkoholizmus a drogové závislosti',
    id: 'alkoholizmus-a-drogove-zavislosti',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/alkoholizmus-a-drogove-zavislosti.csl',
  },
  {
    label: 'Allergology International',
    id: 'allergology-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/allergology-international.csl',
  },
  {
    label: 'Allergy',
    id: 'allergy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/allergy.csl',
  },
  {
    label: 'Alternatif Politika',
    id: 'alternatif-politika',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/alternatif-politika.csl',
  },
  {
    label: 'Alternatives to Animal Experimentation',
    id: 'alternatives-to-animal-experimentation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/alternatives-to-animal-experimentation.csl',
  },
  {
    label: 'AMBIO',
    id: 'ambio',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ambio.csl',
  },
  {
    label: 'Ameghiniana',
    id: 'ameghiniana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ameghiniana.csl',
  },
  {
    label: 'American Anthropological Association',
    id: 'american-anthropological-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-anthropological-association.csl',
  },
  {
    label: 'American Association for Cancer Research',
    id: 'american-association-for-cancer-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-association-for-cancer-research.csl',
  },
  {
    label: 'American Association of Petroleum Geologists',
    id: 'american-association-of-petroleum-geologists',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-association-of-petroleum-geologists.csl',
  },
  {
    label: 'American Chemical Society',
    id: 'american-chemical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-chemical-society.csl',
  },
  {
    label: 'American Fisheries Society',
    id: 'american-fisheries-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-fisheries-society.csl',
  },
  {
    label: 'American Geophysical Union',
    id: 'american-geophysical-union',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-geophysical-union.csl',
  },
  {
    label: 'American Heart Association',
    id: 'american-heart-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-heart-association.csl',
  },
  {
    label: 'American Institute of Aeronautics and Astronautics',
    id: 'american-institute-of-aeronautics-and-astronautics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-institute-of-aeronautics-and-astronautics.csl',
  },
  {
    label: 'American Institute of Physics 4th edition',
    id: 'american-institute-of-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-institute-of-physics.csl',
  },
  {
    label: 'American Journal of Agricultural Economics',
    id: 'american-journal-of-agricultural-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-agricultural-economics.csl',
  },
  {
    label: 'American Journal of Archaeology',
    id: 'american-journal-of-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-archaeology.csl',
  },
  {
    label: 'American Journal of Botany',
    id: 'american-journal-of-botany',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-botany.csl',
  },
  {
    label: 'American Journal of Climate Change',
    id: 'american-journal-of-climate-change',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-climate-change.csl',
  },
  {
    label: 'American Journal of Clinical Pathology',
    id: 'american-journal-of-clinical-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-clinical-pathology.csl',
  },
  {
    label: 'American Journal of Enology and Viticulture',
    id: 'american-journal-of-enology-and-viticulture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-enology-and-viticulture.csl',
  },
  {
    label: 'American Journal of Epidemiology',
    id: 'american-journal-of-epidemiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-epidemiology.csl',
  },
  {
    label: 'American Journal of Health Behavior',
    id: 'american-journal-of-health-behavior',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-health-behavior.csl',
  },
  {
    label: 'American Journal of Hypertension',
    id: 'american-journal-of-hypertension',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-hypertension.csl',
  },
  {
    label: 'American Journal of Medical Genetics',
    id: 'american-journal-of-medical-genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-medical-genetics.csl',
  },
  {
    label: 'American Journal of Neuroradiology',
    id: 'american-journal-of-neuroradiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-neuroradiology.csl',
  },
  {
    label: 'American Journal of Orthodontics & Dentofacial Orthopedics',
    id: 'american-journal-of-orthodontics-and-dentofacial-orthopedics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-orthodontics-and-dentofacial-orthopedics.csl',
  },
  {
    label: 'American Journal of Plant Sciences',
    id: 'american-journal-of-plant-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-plant-sciences.csl',
  },
  {
    label: 'American Journal of Political Science',
    id: 'american-journal-of-political-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-political-science.csl',
  },
  {
    label: 'American Journal of Respiratory and Critical Care Medicine',
    id: 'american-journal-of-respiratory-and-critical-care-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-respiratory-and-critical-care-medicine.csl',
  },
  {
    label: 'American Journal of Science',
    id: 'american-journal-of-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-science.csl',
  },
  {
    label: 'American Journal of Sociology',
    id: 'american-journal-of-sociology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-sociology.csl',
  },
  {
    label: 'American Journal of Sonography',
    id: 'american-journal-of-sonography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-sonography.csl',
  },
  {
    label: 'American Journal of Surgical Pathology',
    id: 'american-journal-of-surgical-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-surgical-pathology.csl',
  },
  {
    label: 'American Journal of Translational Research',
    id: 'american-journal-of-translational-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-journal-of-translational-research.csl',
  },
  {
    label: 'American Marketing Association',
    id: 'american-marketing-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-marketing-association.csl',
  },
  {
    label: 'American Medical Association 10th edition',
    id: 'american-medical-association-10th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-10th-edition.csl',
  },
  {
    label: 'American Medical Association 11th edition (sorted alphabetically)',
    id: 'american-medical-association-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-alphabetical.csl',
  },
  {
    label: 'American Medical Association 11th edition (brackets)',
    id: 'american-medical-association-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-brackets.csl',
  },
  {
    label: 'American Medical Association 11th edition (no "et al.")',
    id: 'american-medical-association-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-no-et-al.csl',
  },
  {
    label:
      'American Medical Association 11th edition (no URL, sorted alphabetically)',
    id: 'american-medical-association-no-url-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-no-url-alphabetical.csl',
  },
  {
    label: 'American Medical Association 11th edition (no URL)',
    id: 'american-medical-association-no-url',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-no-url.csl',
  },
  {
    label: 'American Medical Association 11th edition (parentheses)',
    id: 'american-medical-association-parentheses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association-parentheses.csl',
  },
  {
    label: 'American Medical Association 11th edition',
    id: 'american-medical-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-medical-association.csl',
  },
  {
    label: 'American Meteorological Society',
    id: 'american-meteorological-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-meteorological-society.csl',
  },
  {
    label: 'American Mineralogist',
    id: 'american-mineralogist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-mineralogist.csl',
  },
  {
    label: 'American Nuclear Society',
    id: 'american-nuclear-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-nuclear-society.csl',
  },
  {
    label: 'American Physical Society - et al. (if more than 3 authors)',
    id: 'american-physical-society-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-physical-society-et-al.csl',
  },
  {
    label: 'American Physical Society (without titles)',
    id: 'american-physics-society-without-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-physics-society-without-titles.csl',
  },
  {
    label: 'American Physical Society',
    id: 'american-physics-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-physics-society.csl',
  },
  {
    label: 'American Physiological Society',
    id: 'american-physiological-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-physiological-society.csl',
  },
  {
    label: 'American Phytopathological Society',
    id: 'american-phytopathological-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-phytopathological-society.csl',
  },
  {
    label: 'American Political Science Association',
    id: 'american-political-science-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-political-science-association.csl',
  },
  {
    label: 'American School of Classical Studies at Athens',
    id: 'american-school-of-classical-studies-at-athens',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-school-of-classical-studies-at-athens.csl',
  },
  {
    label: 'American Society for Horticultural Science',
    id: 'american-society-for-horticultural-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-for-horticultural-science.csl',
  },
  {
    label: 'American Society for Microbiology',
    id: 'american-society-for-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-for-microbiology.csl',
  },
  {
    label: 'American Society for Pharmacology and Experimental Therapeutics',
    id: 'american-society-for-pharmacology-and-experimental-therapeutics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-for-pharmacology-and-experimental-therapeutics.csl',
  },
  {
    label: 'American Society of Agricultural and Biological Engineers',
    id: 'american-society-of-agricultural-and-biological-engineers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-of-agricultural-and-biological-engineers.csl',
  },
  {
    label: 'American Society of Civil Engineers',
    id: 'american-society-of-civil-engineers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-of-civil-engineers.csl',
  },
  {
    label: 'American Society of Mechanical Engineers',
    id: 'american-society-of-mechanical-engineers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-society-of-mechanical-engineers.csl',
  },
  {
    label: 'American Sociological Association 6th edition',
    id: 'american-sociological-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-sociological-association.csl',
  },
  {
    label: 'American Statistical Association',
    id: 'american-statistical-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-statistical-association.csl',
  },
  {
    label: 'American Veterinary Medical Association',
    id: 'american-veterinary-medical-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/american-veterinary-medical-association.csl',
  },
  {
    label: 'Amerindia',
    id: 'amerindia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/amerindia.csl',
  },
  {
    label: 'Amphibia-Reptilia',
    id: 'amphibia-reptilia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/amphibia-reptilia.csl',
  },
  {
    label: 'Amsterdam University Press - Academic',
    id: 'amsterdam-university-press-academic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/amsterdam-university-press-academic.csl',
  },
  {
    label: 'Anabases',
    id: 'anabases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anabases.csl',
  },
  {
    label: 'Anaesthesia',
    id: 'anaesthesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anaesthesia.csl',
  },
  {
    label: 'Anais da Academia Brasileira de Ciências',
    id: 'anais-da-academia-brasileira-de-ciencias',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anais-da-academia-brasileira-de-ciencias.csl',
  },
  {
    label: 'Analytical Sciences',
    id: 'analytical-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/analytical-sciences.csl',
  },
  {
    label: 'Anatomical Sciences Education',
    id: 'anatomical-sciences-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anatomical-sciences-education.csl',
  },
  {
    label: 'Ancilla Iuris',
    id: 'ancilla-iuris',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ancilla-iuris.csl',
  },
  {
    label: 'Andean Geology',
    id: 'andean-geology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/andean-geology.csl',
  },
  {
    label: 'Anesthesia and Analgesia',
    id: 'anesthesia-and-analgesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anesthesia-and-analgesia.csl',
  },
  {
    label: 'Anesthesiology',
    id: 'anesthesiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anesthesiology.csl',
  },
  {
    label: 'Angewandte Chemie International Edition',
    id: 'angewandte-chemie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/angewandte-chemie.csl',
  },
  {
    label: 'Angiologia (Español)',
    id: 'angiologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/angiologia.csl',
  },
  {
    label: 'Angiology',
    id: 'angiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/angiology.csl',
  },
  {
    label: 'Anglia',
    id: 'anglia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anglia.csl',
  },
  {
    label: 'Animal Conservation',
    id: 'animal-conservation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/animal-conservation.csl',
  },
  {
    label: 'Animal Migration',
    id: 'animal-migration',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/animal-migration.csl',
  },
  {
    label: 'Animal Welfare',
    id: 'animal-welfare',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/animal-welfare.csl',
  },
  {
    label: 'animal',
    id: 'animal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/animal.csl',
  },
  {
    label: 'Annalen des Naturhistorischen Museums in Wien',
    id: 'annalen-des-naturhistorischen-museums-in-wien',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annalen-des-naturhistorischen-museums-in-wien.csl',
  },
  {
    label: 'Annales de démographie historique',
    id: 'annales-de-demographie-historique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annales-de-demographie-historique.csl',
  },
  {
    label: 'Annales. Histoire, Sciences sociales (Français)',
    id: 'annales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annales.csl',
  },
  {
    label: 'Annals of Allergy, Asthma & Immunology',
    id: 'annals-of-allergy-asthma-and-immunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-allergy-asthma-and-immunology.csl',
  },
  {
    label: 'Annals of Applied Biology',
    id: 'annals-of-applied-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-applied-biology.csl',
  },
  {
    label: 'Annals of Behavioral Medicine',
    id: 'annals-of-behavioral-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-behavioral-medicine.csl',
  },
  {
    label: 'Annals of Biomedical Engineering',
    id: 'annals-of-biomedical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-biomedical-engineering.csl',
  },
  {
    label: 'Annals of Botany',
    id: 'annals-of-botany',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-botany.csl',
  },
  {
    label: 'Annals of Eye Science',
    id: 'annals-of-eye-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-eye-science.csl',
  },
  {
    label: 'Annals of Joint',
    id: 'annals-of-joint',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-joint.csl',
  },
  {
    label: 'Annals of Laboratory Medicine',
    id: 'annals-of-laboratory-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-laboratory-medicine.csl',
  },
  {
    label: 'Annals of Neurology',
    id: 'annals-of-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-neurology.csl',
  },
  {
    label: 'Annals of Oncology',
    id: 'annals-of-oncology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-oncology.csl',
  },
  {
    label: 'Annals of Public and Cooperative Economics',
    id: 'annals-of-public-and-cooperative-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-public-and-cooperative-economics.csl',
  },
  {
    label: 'Annals of Surgery',
    id: 'annals-of-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-surgery.csl',
  },
  {
    label: 'Annals of the Association of American Geographers',
    id: 'annals-of-the-association-of-american-geographers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-the-association-of-american-geographers.csl',
  },
  {
    label: 'Annals of the New York Academy of Sciences',
    id: 'annals-of-the-new-york-academy-of-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-the-new-york-academy-of-sciences.csl',
  },
  {
    label: 'Annals of Work Exposures and Health',
    id: 'annals-of-work-exposures-and-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annals-of-work-exposures-and-health.csl',
  },
  {
    label: 'Annual Review of Astronomy and Astrophysics',
    id: 'annual-review-of-astronomy-and-astrophysics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-review-of-astronomy-and-astrophysics.csl',
  },
  {
    label: 'Annual Review of Linguistics',
    id: 'annual-review-of-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-review-of-linguistics.csl',
  },
  {
    label: 'Annual Review of Medicine',
    id: 'annual-review-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-review-of-medicine.csl',
  },
  {
    label: 'Annual Review of Nuclear and Particle Science',
    id: 'annual-review-of-nuclear-and-particle-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-review-of-nuclear-and-particle-science.csl',
  },
  {
    label: 'Annual Reviews (sorted alphabetically)',
    id: 'annual-reviews-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-reviews-alphabetical.csl',
  },
  {
    label: 'Annual Reviews (author-date)',
    id: 'annual-reviews-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-reviews-author-date.csl',
  },
  {
    label: 'Annual Reviews (sorted by order of appearance, without titles)',
    id: 'annual-reviews-without-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-reviews-without-titles.csl',
  },
  {
    label: 'Annual Reviews (sorted by order of appearance)',
    id: 'annual-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/annual-reviews.csl',
  },
  {
    label: 'Antarctic Science',
    id: 'antarctic-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/antarctic-science.csl',
  },
  {
    label: 'Anthropologie et Sociétés (Français)',
    id: 'anthropologie-et-societes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anthropologie-et-societes.csl',
  },
  {
    label: 'Anti-Trafficking Review',
    id: 'anti-trafficking-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anti-trafficking-review.csl',
  },
  {
    label: 'Anticancer Research',
    id: 'anticancer-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/anticancer-research.csl',
  },
  {
    label: 'Antipode',
    id: 'antipode',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/antipode.csl',
  },
  {
    label: 'Antiquités africaines',
    id: 'antiquites-africaines',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/antiquites-africaines.csl',
  },
  {
    label: 'Antiquity',
    id: 'antiquity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/antiquity.csl',
  },
  {
    label: 'American Psychological Association 5th edition',
    id: 'apa-5th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-5th-edition.csl',
  },
  {
    label: 'American Psychological Association 6th edition (no ampersand)',
    id: 'apa-6th-edition-no-ampersand',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-6th-edition-no-ampersand.csl',
  },
  {
    label: 'American Psychological Association 6th edition',
    id: 'apa-6th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-6th-edition.csl',
  },
  {
    label:
      'American Psychological Association 7th edition (annotated bibliography)',
    id: 'apa-annotated-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-annotated-bibliography.csl',
  },
  {
    label:
      'American Psychological Association 7th edition (curriculum vitae, sorted by descending date)',
    id: 'apa-cv',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-cv.csl',
  },
  {
    label: 'American Psychological Association 7th edition (Basque/Euskara)',
    id: 'apa-eu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-eu.csl',
  },
  {
    label:
      'American Psychological Association 6th edition (Provost) (Français - Canada)',
    id: 'apa-fr-provost',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-fr-provost.csl',
  },
  {
    label: 'American Psychological Association 7th edition (no ampersand)',
    id: 'apa-no-ampersand',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-no-ampersand.csl',
  },
  {
    label:
      'American Psychological Association 6th edition (no DOIs, no issue numbers)',
    id: 'apa-no-doi-no-issue',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-no-doi-no-issue.csl',
  },
  {
    label: 'American Psychological Association 7th edition (no initials)',
    id: 'apa-no-initials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-no-initials.csl',
  },
  {
    label: 'American Psychological Association 7th edition (numeric, brackets)',
    id: 'apa-numeric-superscript-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-numeric-superscript-brackets.csl',
  },
  {
    label:
      'American Psychological Association 7th edition (numeric, superscript)',
    id: 'apa-numeric-superscript',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-numeric-superscript.csl',
  },
  {
    label: 'American Psychological Association 6th edition ("doi:" DOI prefix)',
    id: 'apa-old-doi-prefix',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-old-doi-prefix.csl',
  },
  {
    label:
      'American Psychological Association 7th edition (single-spaced bibliography)',
    id: 'apa-single-spaced',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-single-spaced.csl',
  },
  {
    label: 'American Psychological Association 6th edition (Türkçe)',
    id: 'apa-tr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-tr.csl',
  },
  {
    label: 'American Psychological Association 7th edition (with abstract)',
    id: 'apa-with-abstract',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa-with-abstract.csl',
  },
  {
    label: 'American Psychological Association 7th edition',
    id: 'apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/apa.csl',
  },
  {
    label: 'Aporia: The Nursing Journal',
    id: 'aporia-the-nursing-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aporia-the-nursing-journal.csl',
  },
  {
    label: 'Applied Clay Science',
    id: 'applied-clay-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/applied-clay-science.csl',
  },
  {
    label: 'Applied Spectroscopy Reviews',
    id: 'applied-spectroscopy-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/applied-spectroscopy-reviews.csl',
  },
  {
    label: 'Applied Spectroscopy',
    id: 'applied-spectroscopy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/applied-spectroscopy.csl',
  },
  {
    label: 'Aquatic Conservation: Marine and Freshwater Ecosystems',
    id: 'aquatic-conservation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aquatic-conservation.csl',
  },
  {
    label: 'Aquatic Invasions',
    id: 'aquatic-invasions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aquatic-invasions.csl',
  },
  {
    label: 'Aquatic Living Resources',
    id: 'aquatic-living-resources',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aquatic-living-resources.csl',
  },
  {
    label: 'Aquitania (Français)',
    id: 'aquitania',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/aquitania.csl',
  },
  {
    label: 'Arachne',
    id: 'arachne',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arachne.csl',
  },
  {
    label: 'Arachnologische Mitteilungen',
    id: 'arachnologische-mitteilungen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arachnologische-mitteilungen.csl',
  },
  {
    label: 'Arachnology',
    id: 'arachnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arachnology.csl',
  },
  {
    label: 'Árbók Hins íslenzka fornleifafélags (Íslenska)',
    id: 'arbok-hins-islenzka-fornleifafelags',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arbok-hins-islenzka-fornleifafelags.csl',
  },
  {
    label: 'Arcadia Science',
    id: 'arcadia-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arcadia-science.csl',
  },
  {
    label: 'Archaeologia Austriaca',
    id: 'archaeologia-austriaca',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archaeologia-austriaca.csl',
  },
  {
    label: 'Archaeometry',
    id: 'archaeometry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archaeometry.csl',
  },
  {
    label: 'Archaeonautica',
    id: 'archaeonautica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archaeonautica.csl',
  },
  {
    label: 'Archeologia Classica (Italiano)',
    id: 'archeologia-classica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archeologia-classica.csl',
  },
  {
    label: 'Archeologické rozhledy',
    id: 'archeologicke-rozhledy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archeologicke-rozhledy.csl',
  },
  {
    label: 'Archéologie médiévale (Français)',
    id: 'archeologie-medievale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archeologie-medievale.csl',
  },
  {
    label: "Archéologies et Sciences de l'Antiquité (Français)",
    id: 'archeologies-et-sciences-de-lantiquite',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archeologies-et-sciences-de-lantiquite.csl',
  },
  {
    label: 'ArcheoSciences (Français)',
    id: 'archeosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archeosciences.csl',
  },
  {
    label: 'Archiv für die civilistische Praxis (Deutsch)',
    id: 'archiv-fur-die-civilistische-praxis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archiv-fur-die-civilistische-praxis.csl',
  },
  {
    label: 'Archiv für Geschichte der Philosophie',
    id: 'archiv-fur-geschichte-der-philosophie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archiv-fur-geschichte-der-philosophie.csl',
  },
  {
    label: 'Archives of Hand and Microsurgery',
    id: 'archives-of-hand-and-microsurgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archives-of-hand-and-microsurgery.csl',
  },
  {
    label: 'Archives of Medical Research',
    id: 'archives-of-medical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archives-of-medical-research.csl',
  },
  {
    label: 'Archives of Physical Medicine and Rehabilitation',
    id: 'archives-of-physical-medicine-and-rehabilitation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archives-of-physical-medicine-and-rehabilitation.csl',
  },
  {
    label: 'Archivos de Bronconeumología',
    id: 'archivos-de-bronconeumologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archivos-de-bronconeumologia.csl',
  },
  {
    label: 'Archivos de la Sociedad Española de Oftalmología (Español)',
    id: 'archivos-de-la-sociedad-espanola-de-oftalmologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archivos-de-la-sociedad-espanola-de-oftalmologia.csl',
  },
  {
    label: 'Archivum Latinitatis Medii Aevi (Français)',
    id: 'archivum-latinitatis-medii-aevi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/archivum-latinitatis-medii-aevi.csl',
  },
  {
    label: 'Arctic, Antarctic, and Alpine Research',
    id: 'arctic-antarctic-and-alpine-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arctic-antarctic-and-alpine-research.csl',
  },
  {
    label: 'Arctic',
    id: 'arctic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arctic.csl',
  },
  {
    label:
      'Arhiv za higijenu rada i toksikologiju (Archives of Industrial Hygiene and Toxicology)',
    id: 'arhiv-za-higijenu-rada-i-toksikologiju',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arhiv-za-higijenu-rada-i-toksikologiju.csl',
  },
  {
    label: 'Arkivoc',
    id: 'arkivoc',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arkivoc.csl',
  },
  {
    label: 'Art History',
    id: 'art-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/art-history.csl',
  },
  {
    label: 'Art Libraries Society of North America: ARLIS/NA Reviews',
    id: 'art-libraries-society-of-north-america-arlisna-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/art-libraries-society-of-north-america-arlisna-reviews.csl',
  },
  {
    label: 'Artery Research',
    id: 'artery-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/artery-research.csl',
  },
  {
    label: 'Arthritis & Rheumatism',
    id: 'arthritis-and-rheumatism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arthritis-and-rheumatism.csl',
  },
  {
    label: 'Arthropod Systematics & Phylogeny',
    id: 'arthropod-systematics-and-phylogeny',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arthropod-systematics-and-phylogeny.csl',
  },
  {
    label: 'Arts University Bournemouth',
    id: 'arts-university-bournemouth',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arts-university-bournemouth.csl',
  },
  {
    label: 'Arzneimitteltherapie',
    id: 'arzneimitteltherapie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/arzneimitteltherapie.csl',
  },
  {
    label:
      'American Society of Agronomy, Crop Science Society of America, Soil Science Society of America',
    id: 'asa-cssa-sssa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asa-cssa-sssa.csl',
  },
  {
    label: 'ASAIO Journal (American Society for Artificial Internal Organs)',
    id: 'asaio-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asaio-journal.csl',
  },
  {
    label: 'Asia & the Pacific Policy Studies',
    id: 'asia-and-the-pacific-policy-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asia-and-the-pacific-policy-studies.csl',
  },
  {
    label: 'Asia Pacific Journal of Human Resources',
    id: 'asia-pacific-journal-of-human-resources',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asia-pacific-journal-of-human-resources.csl',
  },
  {
    label: 'Asian Journal of Neurosurgery',
    id: 'asian-journal-of-neurosurgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asian-journal-of-neurosurgery.csl',
  },
  {
    label: 'Asian Myrmecology',
    id: 'asian-myrmecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asian-myrmecology.csl',
  },
  {
    label: 'Asian Studies Review',
    id: 'asian-studies-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/asian-studies-review.csl',
  },
  {
    label:
      'Escola de Comando e Estado-Maior do Exército - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-eceme',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-eceme.csl',
  },
  {
    label:
      'Escola de Comando e Estado-Maior do Exército - Instituto Meira Mattos - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-instituto-meira-mattos',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-instituto-meira-mattos.csl',
  },
  {
    label:
      'Instituto de Pesquisa Econômica Aplicada - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ipea',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ipea.csl',
  },
  {
    label:
      'Associação Brasileira de Normas Técnicas (note, Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-note.csl',
  },
  {
    label:
      'Universidade Federal de Minas Gerais - Faculdade de Ciências Econômicas - ABNT (autoria completa) (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufmg-face-full',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufmg-face-full.csl',
  },
  {
    label:
      'Universidade Federal de Minas Gerais - Faculdade de Ciências Econômicas - ABNT (autoria abreviada) (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufmg-face-initials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufmg-face-initials.csl',
  },
  {
    label: 'Universidade Federal do Paraná - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufpr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufpr.csl',
  },
  {
    label:
      'Universidade Federal do Rio Grande do Sul - ABNT (autoria abreviada) (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufrgs-initials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufrgs-initials.csl',
  },
  {
    label:
      'Universidade Federal do Rio Grande do Sul - ABNT (autoria abreviada, nota, com Ibid.) (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufrgs-note-initials-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufrgs-note-initials-with-ibid.csl',
  },
  {
    label:
      'Universidade Federal do Rio Grande do Sul - ABNT (autoria completa) (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufrgs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufrgs.csl',
  },
  {
    label: 'Universidade Federal de Sergipe - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-ufs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-ufs.csl',
  },
  {
    label:
      'Universidade Federal do Estado do Rio de Janeiro - Educação Infantil e Políticas Públicas - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-unirio-eipp',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-unirio-eipp.csl',
  },
  {
    label:
      'Universidade de São Paulo - Faculdade de Medicina Veterinária e Zootecnia - ABNT (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas-usp-fmvz',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas-usp-fmvz.csl',
  },
  {
    label: 'Associação Brasileira de Normas Técnicas (Português - Brasil)',
    id: 'associacao-brasileira-de-normas-tecnicas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-brasileira-de-normas-tecnicas.csl',
  },
  {
    label:
      'ANPET - Congresso de Pesquisa e Ensino em Transportes (Português - Brasil)',
    id: 'associacao-nacional-de-pesquisa-e-ensino-em-transportes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/associacao-nacional-de-pesquisa-e-ensino-em-transportes.csl',
  },
  {
    label: 'Association de Science Régionale de Langue Française (Français)',
    id: 'association-de-science-regionale-de-langue-francaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/association-de-science-regionale-de-langue-francaise.csl',
  },
  {
    label: 'Association for Computational Linguistics - Conference Proceedings',
    id: 'association-for-computational-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/association-for-computational-linguistics.csl',
  },
  {
    label: 'Association for Computing Machinery',
    id: 'association-for-computing-machinery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/association-for-computing-machinery.csl',
  },
  {
    label: 'Atlande (author-date, Français)',
    id: 'atlande',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/atlande.csl',
  },
  {
    label: 'Atlas of Genetics and Cytogenetics in Oncology and Haematology',
    id: 'atlas-of-genetics-and-cytogenetics-in-oncology-and-haematology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/atlas-of-genetics-and-cytogenetics-in-oncology-and-haematology.csl',
  },
  {
    label: 'Ausonius Éditions (Français)',
    id: 'ausonius-editions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ausonius-editions.csl',
  },
  {
    label: 'Austral Ecology',
    id: 'austral-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/austral-ecology.csl',
  },
  {
    label: 'Austral Entomology',
    id: 'austral-entomology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/austral-entomology.csl',
  },
  {
    label: 'Australasian Journal of Philosophy',
    id: 'australasian-journal-of-philosophy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australasian-journal-of-philosophy.csl',
  },
  {
    label: 'Australian Archaeology',
    id: 'australian-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-archaeology.csl',
  },
  {
    label: 'Australian Critical Care',
    id: 'australian-critical-care',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-critical-care.csl',
  },
  {
    label: 'Australian Dental Journal',
    id: 'australian-dental-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-dental-journal.csl',
  },
  {
    label: 'Australian Guide to Legal Citation 3rd edition',
    id: 'australian-guide-to-legal-citation-3rd-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-guide-to-legal-citation-3rd-edition.csl',
  },
  {
    label: 'Australian Guide to Legal Citation 4th edition',
    id: 'australian-guide-to-legal-citation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-guide-to-legal-citation.csl',
  },
  {
    label: 'Australian Historical Studies',
    id: 'australian-historical-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-historical-studies.csl',
  },
  {
    label: 'Australian Journal of Earth Sciences',
    id: 'australian-journal-of-earth-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-journal-of-earth-sciences.csl',
  },
  {
    label: 'Australian Journal of Grape and Wine Research',
    id: 'australian-journal-of-grape-and-wine-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-journal-of-grape-and-wine-research.csl',
  },
  {
    label: 'Australian Road Research Board',
    id: 'australian-road-research-board',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-road-research-board.csl',
  },
  {
    label: 'Australian Veterinary Journal',
    id: 'australian-veterinary-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/australian-veterinary-journal.csl',
  },
  {
    label:
      'Austrian Journal of Development Studies (Journal für Entwicklungspolitik)',
    id: 'austrian-journal-of-development-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/austrian-journal-of-development-studies.csl',
  },
  {
    label: 'Austrian Legal (Deutsch - Österreich)',
    id: 'austrian-legal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/austrian-legal.csl',
  },
  {
    label: 'Avian Conservation and Ecology',
    id: 'avian-conservation-and-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/avian-conservation-and-ecology.csl',
  },
  {
    label: 'Avian Diseases',
    id: 'avian-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/avian-diseases.csl',
  },
  {
    label: 'Avian Pathology',
    id: 'avian-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/avian-pathology.csl',
  },
  {
    label: 'Ayer (Español)',
    id: 'ayer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ayer.csl',
  },
  {
    label:
      'AZR - Abkürzungs- und Zitierregeln der österreichischen Rechtssprache und europarechtlicher Rechtsquellen (Deutsch - Österreich)',
    id: 'azr-abkurzungs-und-zitierregeln-der-osterreichischen-rechtssprache-und-europarechtlicher-rechtsquellen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/azr-abkurzungs-und-zitierregeln-der-osterreichischen-rechtssprache-und-europarechtlicher-rechtsquellen.csl',
  },
  {
    label:
      'Babes-Bolyai University - Faculty of Orthodox Theology (no ibid., Română)',
    id: 'babes-bolyai-university-faculty-of-orthodox-theology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/babes-bolyai-university-faculty-of-orthodox-theology.csl',
  },
  {
    label: 'BABESCH - Annual Papers on Mediterranean Archaeology',
    id: 'babesch-annual-papers-on-mediterranean-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/babesch-annual-papers-on-mediterranean-archaeology.csl',
  },
  {
    label: 'Baghdad Science Journal',
    id: 'baghdad-science-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/baghdad-science-journal.csl',
  },
  {
    label: 'Baishideng Publishing Group',
    id: 'baishideng-publishing-group',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/baishideng-publishing-group.csl',
  },
  {
    label: 'Bakhtiniana: Journal of Discourse Studies',
    id: 'bakhtiniana-journal-of-discourse-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bakhtiniana-journal-of-discourse-studies.csl',
  },
  {
    label: 'Begell House - APA',
    id: 'begell-house-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/begell-house-apa.csl',
  },
  {
    label: 'Begell House - Chicago Manual of Style',
    id: 'begell-house-chicago-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/begell-house-chicago-author-date.csl',
  },
  {
    label: 'Behaviour',
    id: 'behaviour',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/behaviour.csl',
  },
  {
    label: 'Beilstein Journal of Organic Chemistry',
    id: 'beilstein-journal-of-organic-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/beilstein-journal-of-organic-chemistry.csl',
  },
  {
    label: 'Beltz - Pädagogik (Deutsch)',
    id: 'beltz-padagogik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/beltz-padagogik.csl',
  },
  {
    label: 'Berghahn Books (author-date, English - UK)',
    id: 'berghahn-books-author-date-en-gb',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/berghahn-books-author-date-en-gb.csl',
  },
  {
    label:
      'Berlin School of Economics and Law - International Marketing Management',
    id: 'berlin-school-of-economics-and-law-international-marketing-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/berlin-school-of-economics-and-law-international-marketing-management.csl',
  },
  {
    label:
      'Bern University of Applied Sciences - School of Agricultural, Forest and Food Sciences HAFL (author-date)',
    id: 'bern-university-of-applied-sciences-school-of-agricultural-forest-and-food-sciences-hafl',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bern-university-of-applied-sciences-school-of-agricultural-forest-and-food-sciences-hafl.csl',
  },
  {
    label: 'Betriebswirtschaftliche Forschung und Praxis (Deutsch)',
    id: 'betriebswirtschaftliche-forschung-und-praxis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/betriebswirtschaftliche-forschung-und-praxis.csl',
  },
  {
    label: 'Biblio 3W (Español)',
    id: 'biblio-3w',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biblio-3w.csl',
  },
  {
    label: 'Bibliothecae.it (Italiano)',
    id: 'bibliothecae-it',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bibliothecae-it.csl',
  },
  {
    label: 'Bibliothek – Forschung und Praxis',
    id: 'bibliothek-forschung-und-praxis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bibliothek-forschung-und-praxis.csl',
  },
  {
    label:
      "Bibliothèque d'archéologie méditerranéenne et africaine (BiAMA) (Français)",
    id: 'bibliotheque-d-archeologie-mediterraneenne-et-africaine-biama',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bibliotheque-d-archeologie-mediterraneenne-et-africaine-biama.csl',
  },
  {
    label: 'Bibliothèque universitaire de médecine - Vancouver (Français)',
    id: 'bibliotheque-universitaire-de-medecine-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bibliotheque-universitaire-de-medecine-vancouver.csl',
  },
  {
    label: 'BibTeX generic citation style',
    id: 'bibtex',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bibtex.csl',
  },
  {
    label: 'Biens symboliques / Symbolic Goods',
    id: 'biens-symboliques-symbolic-goods',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biens-symboliques-symbolic-goods.csl',
  },
  {
    label: 'Bio-protocol',
    id: 'bio-protocol',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bio-protocol.csl',
  },
  {
    label: 'Bioarchaeology International',
    id: 'bioarchaeology-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioarchaeology-international.csl',
  },
  {
    label: 'Bioarchaeology of the Near East',
    id: 'bioarchaeology-of-the-near-east',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioarchaeology-of-the-near-east.csl',
  },
  {
    label: 'Biochemical Journal',
    id: 'biochemical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biochemical-journal.csl',
  },
  {
    label: 'Biochemical Society Transactions',
    id: 'biochemical-society-transactions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biochemical-society-transactions.csl',
  },
  {
    label: 'Biochemistry and Molecular Biology Education',
    id: 'biochemistry-and-molecular-biology-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biochemistry-and-molecular-biology-education.csl',
  },
  {
    label: 'Biochemistry',
    id: 'biochemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biochemistry.csl',
  },
  {
    label: 'Biochimica et Biophysica Acta',
    id: 'biochimica-et-biophysica-acta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biochimica-et-biophysica-acta.csl',
  },
  {
    label: 'Bioelectromagnetics',
    id: 'bioelectromagnetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioelectromagnetics.csl',
  },
  {
    label: 'Bioinformatics',
    id: 'bioinformatics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioinformatics.csl',
  },
  {
    label: 'Biologia',
    id: 'biologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biologia.csl',
  },
  {
    label: 'Biological and Pharmaceutical Bulletin',
    id: 'biological-and-pharmaceutical-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biological-and-pharmaceutical-bulletin.csl',
  },
  {
    label: 'Biological Journal of the Linnean Society',
    id: 'biological-journal-of-the-linnean-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biological-journal-of-the-linnean-society.csl',
  },
  {
    label: 'Biological Psychiatry',
    id: 'biological-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biological-psychiatry.csl',
  },
  {
    label: 'Biological Reviews',
    id: 'biological-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biological-reviews.csl',
  },
  {
    label: 'Биологические мембраны',
    id: 'biologiceskie-membrany',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biologiceskie-membrany.csl',
  },
  {
    label: 'Biology of Reproduction',
    id: 'biology-of-reproduction',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biology-of-reproduction.csl',
  },
  {
    label: 'Biomarkers',
    id: 'biomarkers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biomarkers.csl',
  },
  {
    label: 'BioMed Central',
    id: 'biomed-central',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biomed-central.csl',
  },
  {
    label: 'BioMed Research International',
    id: 'biomed-research-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biomed-research-international.csl',
  },
  {
    label: 'Biometrics',
    id: 'biometrics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biometrics.csl',
  },
  {
    label: 'Biomolecular Concepts',
    id: 'biomolecular-concepts',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biomolecular-concepts.csl',
  },
  {
    label: 'Biophysical Journal',
    id: 'biophysical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biophysical-journal.csl',
  },
  {
    label: 'Biophysics and Physicobiology',
    id: 'biophysics-and-physicobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biophysics-and-physicobiology.csl',
  },
  {
    label: 'Biopolymers',
    id: 'biopolymers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biopolymers.csl',
  },
  {
    label: 'BioResources',
    id: 'bioresources',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioresources.csl',
  },
  {
    label: 'BioScience',
    id: 'bioscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bioscience.csl',
  },
  {
    label: 'BioSocieties',
    id: 'biosocieties',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biosocieties.csl',
  },
  {
    label: 'Biostatistics',
    id: 'biostatistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biostatistics.csl',
  },
  {
    label: 'Biota Neotropica',
    id: 'biota-neotropica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biota-neotropica.csl',
  },
  {
    label: 'BioTechniques',
    id: 'biotechniques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biotechniques.csl',
  },
  {
    label: 'Biotechnology and Bioengineering',
    id: 'biotechnology-and-bioengineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biotechnology-and-bioengineering.csl',
  },
  {
    label: 'Biotechnology and Bioprocess Engineering',
    id: 'biotechnology-and-bioprocess-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biotechnology-and-bioprocess-engineering.csl',
  },
  {
    label: 'Biotropica',
    id: 'biotropica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biotropica.csl',
  },
  {
    label: 'b.i.t.online (note, Deutsch)',
    id: 'bitonline',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bitonline.csl',
  },
  {
    label: 'Biuletyn Polskiego Towarzystwa Językoznawczego (Polski)',
    id: 'biuletyn-polskiego-towarzystwa-jezykoznawczego',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/biuletyn-polskiego-towarzystwa-jezykoznawczego.csl',
  },
  {
    label: 'Blood',
    id: 'blood',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/blood.csl',
  },
  {
    label: 'Bloomsbury Academic',
    id: 'bloomsbury-academic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bloomsbury-academic.csl',
  },
  {
    label: 'Bluebook Inline',
    id: 'bluebook-inline',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bluebook-inline.csl',
  },
  {
    label: 'Bluebook Law Review',
    id: 'bluebook-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bluebook-law-review.csl',
  },
  {
    label: 'BMJ',
    id: 'bmj',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bmj.csl',
  },
  {
    label: 'Body & Society',
    id: 'body-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/body-and-society.csl',
  },
  {
    label: 'Boletín de la Sociedad Geológica Mexicana (Español - Mexico)',
    id: 'boletin-de-la-sociedad-geologica-mexicana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/boletin-de-la-sociedad-geologica-mexicana.csl',
  },
  {
    label: 'Boletín de Pediatría (Español)',
    id: 'boletin-de-pediatria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/boletin-de-pediatria.csl',
  },
  {
    label: "Bollettino d'archeologia online (Italiano)",
    id: 'bollettino-d-archeologia-online',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bollettino-d-archeologia-online.csl',
  },
  {
    label: 'Boreal Environment Research',
    id: 'boreal-environment-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/boreal-environment-research.csl',
  },
  {
    label: 'Bourgogne-Franche-Comté Nature (Français)',
    id: 'bourgogne-franche-comte-nature',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bourgogne-franche-comte-nature.csl',
  },
  {
    label: 'Brachytherapy',
    id: 'brachytherapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brachytherapy.csl',
  },
  {
    label: 'Brain, Behavior and Evolution',
    id: 'brain-behavior-and-evolution',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brain-behavior-and-evolution.csl',
  },
  {
    label:
      'Brazilian Journal of Experimental Design, Data Analysis and Inferential Statistics',
    id: 'brazilian-journal-of-experimental-design-data-analysis-and-inferential-statistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brazilian-journal-of-experimental-design-data-analysis-and-inferential-statistics.csl',
  },
  {
    label: 'Brazilian Journal of Infectious Diseases',
    id: 'brazilian-journal-of-infectious-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brazilian-journal-of-infectious-diseases.csl',
  },
  {
    label: 'Brazilian Journal of Psychiatry',
    id: 'brazilian-journal-of-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brazilian-journal-of-psychiatry.csl',
  },
  {
    label: 'Brazilian Journal of Veterinary Research and Animal Science',
    id: 'brazilian-journal-of-veterinary-research-and-animal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brazilian-journal-of-veterinary-research-and-animal-science.csl',
  },
  {
    label: 'Brazilian Oral Research',
    id: 'brazilian-oral-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brazilian-oral-research.csl',
  },
  {
    label: 'BrewingScience',
    id: 'brewingscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/brewingscience.csl',
  },
  {
    label: 'Briefings in Bioinformatics',
    id: 'briefings-in-bioinformatics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/briefings-in-bioinformatics.csl',
  },
  {
    label: 'Bristol University Press',
    id: 'bristol-university-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bristol-university-press.csl',
  },
  {
    label: 'British Journal of Anaesthesia',
    id: 'british-journal-of-anaesthesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-anaesthesia.csl',
  },
  {
    label: 'British Journal of Cancer',
    id: 'british-journal-of-cancer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-cancer.csl',
  },
  {
    label: 'British Journal of Dermatology',
    id: 'british-journal-of-dermatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-dermatology.csl',
  },
  {
    label: 'British Journal of Haematology',
    id: 'british-journal-of-haematology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-haematology.csl',
  },
  {
    label: 'British Journal of Industrial Relations',
    id: 'british-journal-of-industrial-relations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-industrial-relations.csl',
  },
  {
    label: 'British Journal of Pharmacology',
    id: 'british-journal-of-pharmacology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-pharmacology.csl',
  },
  {
    label: 'British Journal of Political Science',
    id: 'british-journal-of-political-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-political-science.csl',
  },
  {
    label: 'British Journal of Surgery',
    id: 'british-journal-of-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/british-journal-of-surgery.csl',
  },
  {
    label: 'Budownictwo i Architektura',
    id: 'budownictwo-i-architektura-pl',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/budownictwo-i-architektura-pl.csl',
  },
  {
    label: 'Building Structure (中文)',
    id: 'building-structure',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/building-structure.csl',
  },
  {
    label: 'Buletin Agrohorti',
    id: 'buletin-agrohorti',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/buletin-agrohorti.csl',
  },
  {
    label: 'Bulletin de correspondance hellénique',
    id: 'bulletin-de-correspondance-hellenique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-de-correspondance-hellenique.csl',
  },
  {
    label: 'Bulletin de la Société Entomologique de France',
    id: 'bulletin-de-la-societe-entomologique-de-france',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-de-la-societe-entomologique-de-france.csl',
  },
  {
    label: 'Bulletin de la Société préhistorique française (Français)',
    id: 'bulletin-de-la-societe-prehistorique-francaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-de-la-societe-prehistorique-francaise.csl',
  },
  {
    label: 'Bulletin du Centre d’études médiévales d’Auxerre (Français)',
    id: 'bulletin-du-centre-detudes-medievales-dauxerre',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-du-centre-detudes-medievales-dauxerre.csl',
  },
  {
    label: 'Bulletin of Geosciences',
    id: 'bulletin-of-geosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-of-geosciences.csl',
  },
  {
    label: 'Bulletin of Marine Science',
    id: 'bulletin-of-marine-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-of-marine-science.csl',
  },
  {
    label: 'Bulletin of the American Schools of Oriental Research',
    id: 'bulletin-of-the-american-schools-of-oriental-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-of-the-american-schools-of-oriental-research.csl',
  },
  {
    label: 'Bulletin of the Seismological Society of America',
    id: 'bulletin-of-the-seismological-society-of-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bulletin-of-the-seismological-society-of-america.csl',
  },
  {
    label: 'Bursa Uludağ Üniversitesi - Eğitim Bilimleri Enstitüsü',
    id: 'bursa-uludag-universitesi-egitim-bilimleri-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bursa-uludag-universitesi-egitim-bilimleri-enstitusu.csl',
  },
  {
    label: 'Bursa Uludağ Üniversitesi - Sağlık Bilimleri Enstitüsü',
    id: 'bursa-uludag-universitesi-saglik-bilimleri-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/bursa-uludag-universitesi-saglik-bilimleri-enstitusu.csl',
  },
  {
    label: 'Business and Human Rights Journal',
    id: 'business-and-human-rights-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/business-and-human-rights-journal.csl',
  },
  {
    label: 'Business Ethics: A European Review',
    id: 'business-ethics-a-european-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/business-ethics-a-european-review.csl',
  },
  {
    label: 'BYZANTINA SYMMEIKTA',
    id: 'byzantina-symmeikta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/byzantina-symmeikta.csl',
  },
  {
    label: 'Byzantine and Modern Greek Studies',
    id: 'byzantine-and-modern-greek-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/byzantine-and-modern-greek-studies.csl',
  },
  {
    label: "Cahiers d'ethnomusicologie (Français)",
    id: 'cahiers-d-ethnomusicologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cahiers-d-ethnomusicologie.csl',
  },
  {
    label: 'Cahiers du Centre Gustave-Glotz (Français)',
    id: 'cahiers-du-centre-gustave-glotz',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cahiers-du-centre-gustave-glotz.csl',
  },
  {
    label: 'Cahiers Mondes Anciens (Français)',
    id: 'cahiers-mondes-anciens',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cahiers-mondes-anciens.csl',
  },
  {
    label: 'California Agriculture',
    id: 'california-agriculture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/california-agriculture.csl',
  },
  {
    label: 'Cambridge Journal of Economics',
    id: 'cambridge-journal-of-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-journal-of-economics.csl',
  },
  {
    label: 'Cambridge University Press, CambridgeA (author-date)',
    id: 'cambridge-university-press-author-date-cambridge-a',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-university-press-author-date-cambridge-a.csl',
  },
  {
    label: 'Cambridge University Press, CambridgeB (author-date)',
    id: 'cambridge-university-press-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-university-press-author-date.csl',
  },
  {
    label: 'Cambridge University Press - Law (note)',
    id: 'cambridge-university-press-law-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-university-press-law-note.csl',
  },
  {
    label: 'Cambridge University Press (note)',
    id: 'cambridge-university-press-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-university-press-note.csl',
  },
  {
    label: 'Cambridge University Press (numeric)',
    id: 'cambridge-university-press-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cambridge-university-press-numeric.csl',
  },
  {
    label:
      'Campus adventiste du Salève - Faculté adventiste de théologie (Français)',
    id: 'campus-adventiste-du-saleve-faculte-adventiste-de-theologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/campus-adventiste-du-saleve-faculte-adventiste-de-theologie.csl',
  },
  {
    label: 'Canadian Biosystems Engineering',
    id: 'canadian-biosystems-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-biosystems-engineering.csl',
  },
  {
    label: 'Canadian Geotechnical Journal',
    id: 'canadian-geotechnical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-geotechnical-journal.csl',
  },
  {
    label: 'Canadian Journal of Chemistry',
    id: 'canadian-journal-of-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-chemistry.csl',
  },
  {
    label: 'Canadian Journal of Dietetic Practice and Research',
    id: 'canadian-journal-of-dietetic-practice-and-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-dietetic-practice-and-research.csl',
  },
  {
    label: 'Canadian Journal of Earth Sciences',
    id: 'canadian-journal-of-earth-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-earth-sciences.csl',
  },
  {
    label: 'Canadian Journal of Economics',
    id: 'canadian-journal-of-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-economics.csl',
  },
  {
    label: 'Canadian Journal of Fisheries and Aquatic Sciences',
    id: 'canadian-journal-of-fisheries-and-aquatic-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-fisheries-and-aquatic-sciences.csl',
  },
  {
    label: 'Canadian Journal of Physics',
    id: 'canadian-journal-of-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-physics.csl',
  },
  {
    label: 'Canadian Journal of Public Health',
    id: 'canadian-journal-of-public-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-public-health.csl',
  },
  {
    label: 'Canadian Journal of Soil Science',
    id: 'canadian-journal-of-soil-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-journal-of-soil-science.csl',
  },
  {
    label: 'Canadian Public Policy',
    id: 'canadian-public-policy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/canadian-public-policy.csl',
  },
  {
    label: 'Cancer Biomarkers',
    id: 'cancer-biomarkers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cancer-biomarkers.csl',
  },
  {
    label: 'Cancer Drug Resistance',
    id: 'cancer-drug-resistance',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cancer-drug-resistance.csl',
  },
  {
    label: 'Cancer Translational Medicine',
    id: 'cancer-translational-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cancer-translational-medicine.csl',
  },
  {
    label: 'Carcinogenesis',
    id: 'carcinogenesis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/carcinogenesis.csl',
  },
  {
    label: 'Cardiff University - Harvard',
    id: 'cardiff-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cardiff-university-harvard.csl',
  },
  {
    label: 'Cardiff University - Vancouver',
    id: 'cardiff-university-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cardiff-university-vancouver.csl',
  },
  {
    label: 'Cardiocore (Español)',
    id: 'cardiocore',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cardiocore.csl',
  },
  {
    label: 'Cath Lab Digest',
    id: 'cath-lab-digest',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cath-lab-digest.csl',
  },
  {
    label: 'Catholic Biblical Association (full note)',
    id: 'catholic-biblical-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/catholic-biblical-association.csl',
  },
  {
    label: 'Cell journals (numeric)',
    id: 'cell-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cell-numeric.csl',
  },
  {
    label: 'Cell Research',
    id: 'cell-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cell-research.csl',
  },
  {
    label: 'Cell Structure and Function',
    id: 'cell-structure-and-function',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cell-structure-and-function.csl',
  },
  {
    label: 'Cell Transplantation',
    id: 'cell-transplantation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cell-transplantation.csl',
  },
  {
    label: 'Cell',
    id: 'cell',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cell.csl',
  },
  {
    label: 'Cellular and Molecular Bioengineering',
    id: 'cellular-and-molecular-bioengineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cellular-and-molecular-bioengineering.csl',
  },
  {
    label: 'Cellular and Molecular Gastroenterology and Hepatology',
    id: 'cellular-and-molecular-gastroenterology-and-hepatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cellular-and-molecular-gastroenterology-and-hepatology.csl',
  },
  {
    label: 'Centaurus',
    id: 'centaurus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/centaurus.csl',
  },
  {
    label:
      'Centre de recherche sur les civilisations de l’Asie orientale (Français - Auteur, Date)',
    id: 'centre-de-recherche-sur-les-civilisations-de-l-asie-orientale-auteur-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/centre-de-recherche-sur-les-civilisations-de-l-asie-orientale-auteur-date.csl',
  },
  {
    label:
      "Centre de recherche sur les civilisations de l'Asie orientale (Français - note)",
    id: 'centre-de-recherche-sur-les-civilisations-de-l-asie-orientale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/centre-de-recherche-sur-les-civilisations-de-l-asie-orientale.csl',
  },
  {
    label: 'Cerebral Cortex',
    id: 'cerebral-cortex',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cerebral-cortex.csl',
  },
  {
    label:
      'Česká zemědělská univerzita v Praze - Fakulta agrobiologie, potravinových a přírodních zdrojů',
    id: 'ceska-zemedelska-univerzita-v-praze-fakulta-agrobiologie-potravinovych-a-prirodnich-zdroju',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ceska-zemedelska-univerzita-v-praze-fakulta-agrobiologie-potravinovych-a-prirodnich-zdroju.csl',
  },
  {
    label: "Changer d'époque (Français)",
    id: 'changer-d-epoque',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/changer-d-epoque.csl',
  },
  {
    label: 'The Chaucer Review',
    id: 'chaucer-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chaucer-review.csl',
  },
  {
    label: 'Chemical and Pharmaceutical Bulletin',
    id: 'chemical-and-pharmaceutical-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemical-and-pharmaceutical-bulletin.csl',
  },
  {
    label: 'Chemical Biology & Drug Design',
    id: 'chemical-biology-and-drug-design',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemical-biology-and-drug-design.csl',
  },
  {
    label: 'Chemical Engineering Progress',
    id: 'chemical-engineering-progress',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemical-engineering-progress.csl',
  },
  {
    label: 'Chemical Engineering & Technology',
    id: 'chemical-engineering-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemical-engineering-technology.csl',
  },
  {
    label: 'Chemical Senses',
    id: 'chemical-senses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemical-senses.csl',
  },
  {
    label: 'Chemie Ingenieur Technik',
    id: 'chemie-ingenieur-technik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemie-ingenieur-technik.csl',
  },
  {
    label: 'Chemistry Education Research and Practice',
    id: 'chemistry-education-research-and-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chemistry-education-research-and-practice.csl',
  },
  {
    label: 'Chest',
    id: 'chest',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chest.csl',
  },
  {
    label:
      'Chicago Manual of Style 17th edition (note, annotated bibliography)',
    id: 'chicago-annotated-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-annotated-bibliography.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (author-date)',
    id: 'chicago-author-date-16th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date-16th-edition.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (author-date, Euskara)',
    id: 'chicago-author-date-basque',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date-basque.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (author-date, Deutsch)',
    id: 'chicago-author-date-de',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date-de.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (author-date, Français)',
    id: 'chicago-author-date-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date-fr.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (author-date)',
    id: 'chicago-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-author-date.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (figures and illustrations)',
    id: 'chicago-figures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-figures.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (full note)',
    id: 'chicago-fullnote-bibliography-16th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-fullnote-bibliography-16th-edition.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (full note, Français)',
    id: 'chicago-fullnote-bibliography-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-fullnote-bibliography-fr.csl',
  },
  {
    label:
      'Chicago Manual of Style 17th edition (full note, short title subsequent)',
    id: 'chicago-fullnote-bibliography-short-title-subsequent',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-fullnote-bibliography-short-title-subsequent.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (full note, with Ibid.)',
    id: 'chicago-fullnote-bibliography-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-fullnote-bibliography-with-ibid.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (full note)',
    id: 'chicago-fullnote-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-fullnote-bibliography.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (library list)',
    id: 'chicago-library-list',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-library-list.csl',
  },
  {
    label: 'Chicago Manual of Style 16th edition (note)',
    id: 'chicago-note-bibliography-16th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-note-bibliography-16th-edition.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (note, with Ibid.)',
    id: 'chicago-note-bibliography-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-note-bibliography-with-ibid.csl',
  },
  {
    label: 'Chicago Manual of Style 17th edition (note)',
    id: 'chicago-note-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chicago-note-bibliography.csl',
  },
  {
    label: 'CHIMIA',
    id: 'chimia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chimia.csl',
  },
  {
    label: 'China Information',
    id: 'china-information',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/china-information.csl',
  },
  {
    label: 'China National Standard GB/T 7714-2015 (author-date, 中文)',
    id: 'china-national-standard-gb-t-7714-2015-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/china-national-standard-gb-t-7714-2015-author-date.csl',
  },
  {
    label: 'China National Standard GB/T 7714-2015 (note, 中文)',
    id: 'china-national-standard-gb-t-7714-2015-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/china-national-standard-gb-t-7714-2015-note.csl',
  },
  {
    label: 'China National Standard GB/T 7714-2015 (numeric, 中文)',
    id: 'china-national-standard-gb-t-7714-2015-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/china-national-standard-gb-t-7714-2015-numeric.csl',
  },
  {
    label: 'China National Standard GB/T 7714-1987 (numeric, 中文)',
    id: 'chinese-gb7714-1987-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chinese-gb7714-1987-numeric.csl',
  },
  {
    label: 'China National Standard GB/T 7714-2005 (author-date, 中文)',
    id: 'chinese-gb7714-2005-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chinese-gb7714-2005-author-date.csl',
  },
  {
    label: 'China National Standard GB/T 7714-2005 (numeric, 中文)',
    id: 'chinese-gb7714-2005-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chinese-gb7714-2005-numeric.csl',
  },
  {
    label: 'Chinese Journal of Aeronautics',
    id: 'chinese-journal-of-aeronautics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chinese-journal-of-aeronautics.csl',
  },
  {
    label: 'Chinese Medical Journal',
    id: 'chinese-medical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chinese-medical-journal.csl',
  },
  {
    label:
      "Chroniques des activités archéologiques de l'Ecole française de Rome",
    id: 'chroniques-des-activites-archeologiques-de-l-ecole-francaise-de-rome',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chroniques-des-activites-archeologiques-de-l-ecole-francaise-de-rome.csl',
  },
  {
    label: 'Chungara Revista de Antropología Chilena (Español - Chile)',
    id: 'chungara-revista-de-antropologia-chilena',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/chungara-revista-de-antropologia-chilena.csl',
  },
  {
    label: 'Circulation Journal',
    id: 'circulation-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/circulation-journal.csl',
  },
  {
    label: 'Circulation',
    id: 'circulation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/circulation.csl',
  },
  {
    label: 'Cirugia Cardiovascular (Español)',
    id: 'cirugia-cardiovascular',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cirugia-cardiovascular.csl',
  },
  {
    label: 'Citation Compass (Kildekompasset) - APA (note)',
    id: 'citation-compass-apa-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/citation-compass-apa-note.csl',
  },
  {
    label: 'Citizen Science: Theory and Practice',
    id: 'citizen-science-theory-and-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/citizen-science-theory-and-practice.csl',
  },
  {
    label: 'Civiltà Italiana (Italiano)',
    id: 'civilta-italiana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/civilta-italiana.csl',
  },
  {
    label: 'Civitas: Revista de Ciências Sociais',
    id: 'civitas-revista-de-ciencias-sociais',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/civitas-revista-de-ciencias-sociais.csl',
  },
  {
    label: 'Cladistics',
    id: 'cladistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cladistics.csl',
  },
  {
    label: 'CLARA Architecture/Recherche (Français)',
    id: 'clara-architecture-recherche',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clara-architecture-recherche.csl',
  },
  {
    label: 'Clay Minerals',
    id: 'clay-minerals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clay-minerals.csl',
  },
  {
    label: 'Clays and Clay Minerals',
    id: 'clays-and-clay-minerals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clays-and-clay-minerals.csl',
  },
  {
    label: 'Climate Change Economics',
    id: 'climate-change-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/climate-change-economics.csl',
  },
  {
    label: 'Clínica e Investigación en Arteriosclerosis (Español)',
    id: 'clinica-e-investigacion-en-arteriosclerosis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinica-e-investigacion-en-arteriosclerosis.csl',
  },
  {
    label: 'Clinical Anatomy',
    id: 'clinical-anatomy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-anatomy.csl',
  },
  {
    label: 'Clinical Dysmorphology',
    id: 'clinical-dysmorphology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-dysmorphology.csl',
  },
  {
    label: 'Clinical Gastroenterology and Hepatology',
    id: 'clinical-gastroenterology-and-hepatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-gastroenterology-and-hepatology.csl',
  },
  {
    label: 'Clinical Hemorheology and Microcirculation',
    id: 'clinical-hemorheology-and-microcirculation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-hemorheology-and-microcirculation.csl',
  },
  {
    label: 'Clinical Infectious Diseases',
    id: 'clinical-infectious-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-infectious-diseases.csl',
  },
  {
    label: 'Clinical Journal of Sport Medicine',
    id: 'clinical-journal-of-sport-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-journal-of-sport-medicine.csl',
  },
  {
    label: 'Clinical Journal of the American Society of Nephrology',
    id: 'clinical-journal-of-the-american-society-of-nephrology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-journal-of-the-american-society-of-nephrology.csl',
  },
  {
    label: 'Clinical Management Issues',
    id: 'clinical-management-issues',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-management-issues.csl',
  },
  {
    label: 'Clinical Nuclear Medicine',
    id: 'clinical-nuclear-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-nuclear-medicine.csl',
  },
  {
    label: 'Clinical Oral Implants Research',
    id: 'clinical-oral-implants-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-oral-implants-research.csl',
  },
  {
    label: 'Clinical Orthopaedics and Related Research',
    id: 'clinical-orthopaedics-and-related-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-orthopaedics-and-related-research.csl',
  },
  {
    label: 'Clinical Otolaryngology',
    id: 'clinical-otolaryngology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-otolaryngology.csl',
  },
  {
    label: 'Clinical Pharmacology & Therapeutics',
    id: 'clinical-pharmacology-and-therapeutics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-pharmacology-and-therapeutics.csl',
  },
  {
    label: 'Clinical Physiology and Functional Imaging',
    id: 'clinical-physiology-and-functional-imaging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-physiology-and-functional-imaging.csl',
  },
  {
    label: 'Clinical Radiology',
    id: 'clinical-radiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-radiology.csl',
  },
  {
    label: 'Clinical Spine Surgery',
    id: 'clinical-spine-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clinical-spine-surgery.csl',
  },
  {
    label: 'Clio Medica',
    id: 'clio-medica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/clio-medica.csl',
  },
  {
    label: 'CNS & Neurological Disorders - Drug Targets',
    id: 'cns-and-neurological-disorders-drug-targets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cns-and-neurological-disorders-drug-targets.csl',
  },
  {
    label: 'CNS Spectrums',
    id: 'cns-spectrums',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cns-spectrums.csl',
  },
  {
    label: 'Cold Spring Harbor Laboratory Press',
    id: 'cold-spring-harbor-laboratory-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cold-spring-harbor-laboratory-press.csl',
  },
  {
    label: "Collection de l'Ecole française de Rome (full note, Français)",
    id: 'collection-de-l-ecole-francaise-de-rome-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/collection-de-l-ecole-francaise-de-rome-full-note.csl',
  },
  {
    label: "Collection de l'Ecole française de Rome (note, Français)",
    id: 'collection-de-l-ecole-francaise-de-rome-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/collection-de-l-ecole-francaise-de-rome-note.csl',
  },
  {
    label: 'Collection du Centre Jean-Bérard (Français)',
    id: 'collection-du-centre-jean-berard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/collection-du-centre-jean-berard.csl',
  },
  {
    label: "Collections électroniques de l'INHA (author-date, Français)",
    id: 'collections-electroniques-de-l-inha-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/collections-electroniques-de-l-inha-author-date.csl',
  },
  {
    label: "Collections électroniques de l'INHA (full note, Français)",
    id: 'collections-electroniques-de-l-inha-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/collections-electroniques-de-l-inha-full-note.csl',
  },
  {
    label: 'Collège Montmorency (note, Français - Canada)',
    id: 'college-montmorency',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/college-montmorency.csl',
  },
  {
    label: 'College of Naturopathic Medicine',
    id: 'college-of-naturopathic-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/college-of-naturopathic-medicine.csl',
  },
  {
    label: 'Colombian Journal of Anesthesiology',
    id: 'colombian-journal-of-anesthesiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/colombian-journal-of-anesthesiology.csl',
  },
  {
    label: 'Colorado State University - School of Biomedical Engineering',
    id: 'colorado-state-university-school-of-biomedical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/colorado-state-university-school-of-biomedical-engineering.csl',
  },
  {
    label: 'Comisión Económica para América Latina y el Caribe (Español)',
    id: 'comision-economica-para-america-latina-y-el-caribe',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/comision-economica-para-america-latina-y-el-caribe.csl',
  },
  {
    label: 'Common Market Law Review',
    id: 'common-market-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/common-market-law-review.csl',
  },
  {
    label: 'Communication et Langages',
    id: 'communication-et-langages',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/communication-et-langages.csl',
  },
  {
    label: 'Comparativ',
    id: 'comparativ',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/comparativ.csl',
  },
  {
    label: 'Comparative Politics',
    id: 'comparative-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/comparative-politics.csl',
  },
  {
    label: 'Comparative Population Studies',
    id: 'comparative-population-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/comparative-population-studies.csl',
  },
  {
    label: 'Computer Supported Cooperative Work',
    id: 'computer-supported-cooperative-work',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/computer-supported-cooperative-work.csl',
  },
  {
    label: 'Computer und Recht (Deutsch)',
    id: 'computer-und-recht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/computer-und-recht.csl',
  },
  {
    label: 'Conservation & Society',
    id: 'conservation-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/conservation-and-society.csl',
  },
  {
    label: 'Conservation Biology',
    id: 'conservation-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/conservation-biology.csl',
  },
  {
    label: 'Conservation Letters',
    id: 'conservation-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/conservation-letters.csl',
  },
  {
    label: 'Conservation Physiology',
    id: 'conservation-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/conservation-physiology.csl',
  },
  {
    label: 'Constructivist Foundations',
    id: 'constructivist-foundations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/constructivist-foundations.csl',
  },
  {
    label: 'Contemporary Accounting Research',
    id: 'contemporary-accounting-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/contemporary-accounting-research.csl',
  },
  {
    label: 'Continuity and Change',
    id: 'continuity-and-change',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/continuity-and-change.csl',
  },
  {
    label: 'Contributions to the Archaeology of Egypt, Nubia and the Levant',
    id: 'contributions-to-the-archaeology-of-egypt-nubia-and-the-levant',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/contributions-to-the-archaeology-of-egypt-nubia-and-the-levant.csl',
  },
  {
    label: 'Copeia',
    id: 'copeia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/copeia.csl',
  },
  {
    label: 'Copernicus Publications',
    id: 'copernicus-publications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/copernicus-publications.csl',
  },
  {
    label: 'Coral Reefs',
    id: 'coral-reefs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/coral-reefs.csl',
  },
  {
    label: 'Cornea',
    id: 'cornea',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cornea.csl',
  },
  {
    label: 'Corrosion',
    id: 'corrosion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/corrosion.csl',
  },
  {
    label:
      'Council of Science Editors, Citation-Name (numeric, sorted alphabetically)',
    id: 'council-of-science-editors-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/council-of-science-editors-alphabetical.csl',
  },
  {
    label: 'Council of Science Editors, Name-Year (author-date)',
    id: 'council-of-science-editors-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/council-of-science-editors-author-date.csl',
  },
  {
    label: 'Council of Science Editors, Citation-Sequence (numeric, brackets)',
    id: 'council-of-science-editors-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/council-of-science-editors-brackets.csl',
  },
  {
    label: 'Council of Science Editors, Citation-Sequence (numeric)',
    id: 'council-of-science-editors',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/council-of-science-editors.csl',
  },
  {
    label: 'Cranfield University (numeric)',
    id: 'cranfield-university-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cranfield-university-numeric.csl',
  },
  {
    label: 'Creativity and Innovation Management',
    id: 'creativity-and-innovation-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/creativity-and-innovation-management.csl',
  },
  {
    label: 'Critical Care Medicine',
    id: 'critical-care-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/critical-care-medicine.csl',
  },
  {
    label: 'Critical Reviews in Plant Sciences',
    id: 'critical-reviews-in-plant-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/critical-reviews-in-plant-sciences.csl',
  },
  {
    label: 'Critical Reviews in Solid State and Materials Sciences',
    id: 'critical-reviews-in-solid-state-and-materials-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/critical-reviews-in-solid-state-and-materials-sciences.csl',
  },
  {
    label: 'Crop Breeding and Applied Biotechnology',
    id: 'crop-breeding-and-applied-biotechnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/crop-breeding-and-applied-biotechnology.csl',
  },
  {
    label: 'Crustaceana',
    id: 'crustaceana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/crustaceana.csl',
  },
  {
    label:
      'Cuadernos de Filología Clásica. Estudios Griegos e Indoeuropeos (autor-año, Español)',
    id: 'cuadernos-de-filologia-clasica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cuadernos-de-filologia-clasica.csl',
  },
  {
    label: 'Cultivos Tropicales (Español)',
    id: 'cultivos-tropicales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cultivos-tropicales.csl',
  },
  {
    label: 'cultural geographies',
    id: 'cultural-geographies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cultural-geographies.csl',
  },
  {
    label: 'Cultural Studies of Science Education',
    id: 'cultural-studies-of-science-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cultural-studies-of-science-education.csl',
  },
  {
    label: 'Culture, Medicine, and Psychiatry',
    id: 'culture-medicine-and-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/culture-medicine-and-psychiatry.csl',
  },
  {
    label: 'Cureus',
    id: 'cureus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cureus.csl',
  },
  {
    label: 'Current Alzheimer Research',
    id: 'current-alzheimer-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-alzheimer-research.csl',
  },
  {
    label: 'Current Gene Therapy',
    id: 'current-gene-therapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-gene-therapy.csl',
  },
  {
    label: 'Current Neurology - Aktualności Neurologiczne',
    id: 'current-neurology-aktualnosci-neurologiczne',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-neurology-aktualnosci-neurologiczne.csl',
  },
  {
    label: 'Current Opinion in Endocrinology, Diabetes and Obesity',
    id: 'current-opinion-in-endocrinology-diabetes-and-obesity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-opinion-in-endocrinology-diabetes-and-obesity.csl',
  },
  {
    label: 'Current Opinion journals',
    id: 'current-opinion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-opinion.csl',
  },
  {
    label: 'Current Organic Synthesis',
    id: 'current-organic-synthesis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-organic-synthesis.csl',
  },
  {
    label: 'Current Pharmaceutical Design',
    id: 'current-pharmaceutical-design',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-pharmaceutical-design.csl',
  },
  {
    label: 'Current Proteomics',
    id: 'current-proteomics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-proteomics.csl',
  },
  {
    label: 'Current Protocols journals',
    id: 'current-protocols',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-protocols.csl',
  },
  {
    label: 'Current Science',
    id: 'current-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-science.csl',
  },
  {
    label: 'Current Topics in Medicinal Chemistry',
    id: 'current-topics-in-medicinal-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/current-topics-in-medicinal-chemistry.csl',
  },
  {
    label: 'Currents in Biblical Research',
    id: 'currents-in-biblical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/currents-in-biblical-research.csl',
  },
  {
    label: 'Cybium',
    id: 'cybium',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cybium.csl',
  },
  {
    label: 'Cytometry',
    id: 'cytometry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/cytometry.csl',
  },
  {
    label: 'Czech Journal of International Relations',
    id: 'czech-journal-of-international-relations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/czech-journal-of-international-relations.csl',
  },
  {
    label: 'Data Science Journal',
    id: 'data-science-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/data-science-journal.csl',
  },
  {
    label: 'Database',
    id: 'database',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/database.csl',
  },
  {
    label: 'De Buck (Nederlands)',
    id: 'de-buck',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/de-buck.csl',
  },
  {
    label: 'De Montfort University - Harvard',
    id: 'de-montfort-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/de-montfort-university-harvard.csl',
  },
  {
    label: 'Decision Sciences',
    id: 'decision-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/decision-sciences.csl',
  },
  {
    label: 'Demographic Research',
    id: 'demographic-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/demographic-research.csl',
  },
  {
    label: 'der moderne staat (Deutsch)',
    id: 'der-moderne-staat',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/der-moderne-staat.csl',
  },
  {
    label: 'Dermatology Online Journal',
    id: 'dermatology-online-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/dermatology-online-journal.csl',
  },
  {
    label: 'Deutsche Gesellschaft für Psychologie 5. Auflage (Deutsch)',
    id: 'deutsche-gesellschaft-fur-psychologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/deutsche-gesellschaft-fur-psychologie.csl',
  },
  {
    label: 'Deutsche Sprache (Deutsch)',
    id: 'deutsche-sprache',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/deutsche-sprache.csl',
  },
  {
    label: 'Deutsches Archäologisches Institut',
    id: 'deutsches-archaologisches-institut',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/deutsches-archaologisches-institut.csl',
  },
  {
    label: 'Deutsches Ärzteblatt',
    id: 'deutsches-arzteblatt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/deutsches-arzteblatt.csl',
  },
  {
    label: 'Developing World Bioethics',
    id: 'developing-world-bioethics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/developing-world-bioethics.csl',
  },
  {
    label: 'Development and Change',
    id: 'development-and-change',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/development-and-change.csl',
  },
  {
    label: 'Development Policy Review',
    id: 'development-policy-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/development-policy-review.csl',
  },
  {
    label: 'Developmental Dynamics',
    id: 'developmental-dynamics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/developmental-dynamics.csl',
  },
  {
    label: 'Developmental Medicine & Child Neurology',
    id: 'developmental-medicine-and-child-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/developmental-medicine-and-child-neurology.csl',
  },
  {
    label: 'Developmental Neurobiology',
    id: 'developmental-neurobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/developmental-neurobiology.csl',
  },
  {
    label: 'Diabetologia',
    id: 'diabetologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/diabetologia.csl',
  },
  {
    label: 'Diagnóstico Prenatal (Español)',
    id: 'diagnostico-prenatal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/diagnostico-prenatal.csl',
  },
  {
    label: 'Dialisis y Trasplante (Español)',
    id: 'dialisis-y-trasplante',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/dialisis-y-trasplante.csl',
  },
  {
    label: 'Diatom Research',
    id: 'diatom-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/diatom-research.csl',
  },
  {
    label: 'Die Bachelorarbeit (Samac et al.) (in-text, Deutsch)',
    id: 'die-bachelorarbeit-samac-et-al-in-text',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/die-bachelorarbeit-samac-et-al-in-text.csl',
  },
  {
    label: 'Die Bachelorarbeit (Samac et al.) (note, Deutsch)',
    id: 'die-bachelorarbeit-samac-et-al-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/die-bachelorarbeit-samac-et-al-note.csl',
  },
  {
    label: 'Digital Humanities im deutschsprachigen Raum (Deutsch)',
    id: 'digital-humanities-im-deutschsprachigen-raum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/digital-humanities-im-deutschsprachigen-raum.csl',
  },
  {
    label: 'Digital Scholarship in the Humanities',
    id: 'digital-scholarship-in-the-humanities',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/digital-scholarship-in-the-humanities.csl',
  },
  {
    label:
      'DIN 1505-2 (alphanumeric, Deutsch) - standard superseded by ISO-690',
    id: 'din-1505-2-alphanumeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/din-1505-2-alphanumeric.csl',
  },
  {
    label:
      'DIN 1505-2 (numeric, sorted alphabetically, Deutsch) - standard superseded by ISO-690',
    id: 'din-1505-2-numeric-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/din-1505-2-numeric-alphabetical.csl',
  },
  {
    label: 'DIN 1505-2 (numeric, Deutsch) - standard superseded by ISO-690',
    id: 'din-1505-2-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/din-1505-2-numeric.csl',
  },
  {
    label: 'DIN 1505-2 (author-date, Deutsch) - standard superseded by ISO-690',
    id: 'din-1505-2',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/din-1505-2.csl',
  },
  {
    label: 'Diplo',
    id: 'diplo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/diplo.csl',
  },
  {
    label: 'Disability and Rehabilitation',
    id: 'disability-and-rehabilitation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/disability-and-rehabilitation.csl',
  },
  {
    label: 'Discovery Medicine',
    id: 'discovery-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/discovery-medicine.csl',
  },
  {
    label: 'DNA Research',
    id: 'dna-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/dna-research.csl',
  },
  {
    label: "Documents d'archéologie française (Français)",
    id: 'documents-d-archeologie-francaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/documents-d-archeologie-francaise.csl',
  },
  {
    label:
      'Donau-Universität Krems - Department für E-Governance in Wirtschaft und Verwaltung (Deutsch - Österreich)',
    id: 'donau-universitat-krems-department-fur-e-governance-in-wirthschaft-und-verwaltung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/donau-universitat-krems-department-fur-e-governance-in-wirthschaft-und-verwaltung.csl',
  },
  {
    label: 'Drug Development Research',
    id: 'drug-development-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/drug-development-research.csl',
  },
  {
    label: 'Drug Testing and Analysis',
    id: 'drug-testing-and-analysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/drug-testing-and-analysis.csl',
  },
  {
    label: 'Drugs of Today',
    id: 'drugs-of-today',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/drugs-of-today.csl',
  },
  {
    label: 'Durban University of Technology - Harvard',
    id: 'durban-university-of-technology-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/durban-university-of-technology-harvard.csl',
  },
  {
    label: 'E3S Web of Conferences',
    id: 'e3s-web-of-conferences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/e3s-web-of-conferences.csl',
  },
  {
    label: 'Ear and Hearing',
    id: 'ear-and-hearing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ear-and-hearing.csl',
  },
  {
    label: 'Early Christianity',
    id: 'early-christianity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/early-christianity.csl',
  },
  {
    label: 'Early Medieval Europe',
    id: 'early-medieval-europe',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/early-medieval-europe.csl',
  },
  {
    label: 'Early Music History',
    id: 'early-music-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/early-music-history.csl',
  },
  {
    label: 'Earth Surface Processes and Landforms',
    id: 'earth-surface-processes-and-landforms',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/earth-surface-processes-and-landforms.csl',
  },
  {
    label: 'Earthquake Engineering & Structural Dynamics',
    id: 'earthquake-engineering-and-structural-dynamics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/earthquake-engineering-and-structural-dynamics.csl',
  },
  {
    label: 'Earthquake Spectra',
    id: 'earthquake-spectra',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/earthquake-spectra.csl',
  },
  {
    label: 'Ecclesial Practices',
    id: 'ecclesial-practices',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecclesial-practices.csl',
  },
  {
    label: 'École de technologie supérieure - APA (Français - Canada)',
    id: 'ecole-de-technologie-superieure-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecole-de-technologie-superieure-apa.csl',
  },
  {
    label:
      'École Pratique des Hautes Études - Sciences historiques et philologiques (Français)',
    id: 'ecole-pratique-des-hautes-etudes-sciences-historiques-et-philologiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecole-pratique-des-hautes-etudes-sciences-historiques-et-philologiques.csl',
  },
  {
    label: 'Ecological Entomology',
    id: 'ecological-entomology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecological-entomology.csl',
  },
  {
    label: 'Ecological Restoration',
    id: 'ecological-restoration',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecological-restoration.csl',
  },
  {
    label: 'Ecology and Society',
    id: 'ecology-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecology-and-society.csl',
  },
  {
    label: 'Ecology Letters',
    id: 'ecology-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecology-letters.csl',
  },
  {
    label: 'Ecology of Freshwater Fish',
    id: 'ecology-of-freshwater-fish',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecology-of-freshwater-fish.csl',
  },
  {
    label: 'Ecology',
    id: 'ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecology.csl',
  },
  {
    label: 'Econometrica',
    id: 'econometrica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/econometrica.csl',
  },
  {
    label: 'Economía y Política (Español - Chile)',
    id: 'economia-y-politica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/economia-y-politica.csl',
  },
  {
    label: 'Economic Commission for Latin America and the Caribbean',
    id: 'economic-commission-for-latin-america-and-the-caribbean',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/economic-commission-for-latin-america-and-the-caribbean.csl',
  },
  {
    label: 'Economic Geology',
    id: 'economic-geology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/economic-geology.csl',
  },
  {
    label: 'Économie et Statistique (Français)',
    id: 'economie-et-statistique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/economie-et-statistique.csl',
  },
  {
    label: 'Écoscience',
    id: 'ecoscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecoscience.csl',
  },
  {
    label: 'Ecosistemas (Español)',
    id: 'ecosistemas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecosistemas.csl',
  },
  {
    label: 'Ecosystems',
    id: 'ecosystems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ecosystems.csl',
  },
  {
    label: 'Edward Elgar Publishing - Business and Social Sciences',
    id: 'edward-elgar-business-and-social-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/edward-elgar-business-and-social-sciences.csl',
  },
  {
    label: 'Effective Altruism Wiki',
    id: 'effective-altruism-wiki',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/effective-altruism-wiki.csl',
  },
  {
    label: 'Egretta (Deutsch - Österreich)',
    id: 'egretta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/egretta.csl',
  },
  {
    label: 'Einaudi (Italiano)',
    id: 'einaudi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/einaudi.csl',
  },
  {
    label: 'Eksploatacja i Niezawodnosc - Maintenance and Reliability',
    id: 'eksploatacja-i-niezawodnosc',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eksploatacja-i-niezawodnosc.csl',
  },
  {
    label: 'Profesional de la información (Español)',
    id: 'el-profesional-de-la-informacion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/el-profesional-de-la-informacion.csl',
  },
  {
    label: 'Electrophoresis',
    id: 'electrophoresis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/electrophoresis.csl',
  },
  {
    label: 'Elementa',
    id: 'elementa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elementa.csl',
  },
  {
    label: 'eLife',
    id: 'elife',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elife.csl',
  },
  {
    label: 'Elsevier - American Chemical Society',
    id: 'elsevier-american-chemical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-american-chemical-society.csl',
  },
  {
    label: 'Elsevier - Harvard (without titles)',
    id: 'elsevier-harvard-without-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-harvard-without-titles.csl',
  },
  {
    label: 'Elsevier - Harvard (with titles)',
    id: 'elsevier-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-harvard.csl',
  },
  {
    label: 'Elsevier - Harvard 2',
    id: 'elsevier-harvard2',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-harvard2.csl',
  },
  {
    label: 'Elsevier - Vancouver (author-date)',
    id: 'elsevier-vancouver-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-vancouver-author-date.csl',
  },
  {
    label: 'Elsevier - Vancouver',
    id: 'elsevier-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-vancouver.csl',
  },
  {
    label: 'Elsevier (numeric, with titles, sorted alphabetically)',
    id: 'elsevier-with-titles-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-with-titles-alphabetical.csl',
  },
  {
    label: 'Elsevier (numeric, with titles)',
    id: 'elsevier-with-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-with-titles.csl',
  },
  {
    label: 'Elsevier (numeric, without titles)',
    id: 'elsevier-without-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/elsevier-without-titles.csl',
  },
  {
    label: 'EMBnet.journal',
    id: 'embnet-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/embnet-journal.csl',
  },
  {
    label: 'EMBO Press',
    id: 'embo-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/embo-press.csl',
  },
  {
    label: 'Emerald - Harvard',
    id: 'emerald-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/emerald-harvard.csl',
  },
  {
    label: 'Emu - Austral Ornithology',
    id: 'emu-austral-ornithology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/emu-austral-ornithology.csl',
  },
  {
    label: 'Endocrine Connections',
    id: 'endocrine-connections',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/endocrine-connections.csl',
  },
  {
    label: 'Endocrine Journal',
    id: 'endocrine-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/endocrine-journal.csl',
  },
  {
    label: 'Endocrine Press',
    id: 'endocrine-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/endocrine-press.csl',
  },
  {
    label: 'Endoscopia (Español)',
    id: 'endoscopia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/endoscopia.csl',
  },
  {
    label: 'Energy Research & Social Science',
    id: 'energy-research-and-social-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/energy-research-and-social-science.csl',
  },
  {
    label: 'eNeuro',
    id: 'eneuro',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eneuro.csl',
  },
  {
    label: 'Enfermería Clínica (Español)',
    id: 'enfermeria-clinica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/enfermeria-clinica.csl',
  },
  {
    label: 'Enfermería Intensiva (Español)',
    id: 'enfermeria-intensiva',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/enfermeria-intensiva.csl',
  },
  {
    label: 'Engineered Regeneration',
    id: 'engineered-regeneration',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/engineered-regeneration.csl',
  },
  {
    label: 'Engineering in Life Sciences',
    id: 'engineering-in-life-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/engineering-in-life-sciences.csl',
  },
  {
    label: 'Engineering, Technology & Applied Science Research',
    id: 'engineering-technology-and-applied-science-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/engineering-technology-and-applied-science-research.csl',
  },
  {
    label: "ENS de Lyon - Centre d'ingénierie documentaire (Français)",
    id: 'ens-de-lyon-centre-d-ingenierie-documentaire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ens-de-lyon-centre-d-ingenierie-documentaire.csl',
  },
  {
    label: 'ENTECHO (Čeština)',
    id: 'entecho',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/entecho.csl',
  },
  {
    label: 'Entomologia Experimentalis et Applicata',
    id: 'entomologia-experimentalis-et-applicata',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/entomologia-experimentalis-et-applicata.csl',
  },
  {
    label: 'Entomological Review',
    id: 'entomological-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/entomological-review.csl',
  },
  {
    label: 'Entomological Society of America',
    id: 'entomological-society-of-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/entomological-society-of-america.csl',
  },
  {
    label: 'Environment and Planning',
    id: 'environment-and-planning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environment-and-planning.csl',
  },
  {
    label: 'Environment and Urbanization',
    id: 'environment-and-urbanization',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environment-and-urbanization.csl',
  },
  {
    label: 'Environmental & Engineering Geoscience',
    id: 'environmental-and-engineering-geoscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-and-engineering-geoscience.csl',
  },
  {
    label: 'Environmental Chemistry',
    id: 'environmental-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-chemistry.csl',
  },
  {
    label: 'Environmental Conservation',
    id: 'environmental-conservation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-conservation.csl',
  },
  {
    label: 'Environmental Health Perspectives',
    id: 'environmental-health-perspectives',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-health-perspectives.csl',
  },
  {
    label: 'Environmental Microbiology',
    id: 'environmental-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-microbiology.csl',
  },
  {
    label: 'Environmental Values',
    id: 'environmental-values',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environmental-values.csl',
  },
  {
    label: 'Environnement, Risques & Santé',
    id: 'environnement-risques-et-sante',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/environnement-risques-et-sante.csl',
  },
  {
    label: 'Ephemerides Theologicae Lovanienses',
    id: 'ephemerides-theologicae-lovanienses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ephemerides-theologicae-lovanienses.csl',
  },
  {
    label: 'Épidémiologie et Santé Animale',
    id: 'epidemiologie-et-sante-animale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/epidemiologie-et-sante-animale.csl',
  },
  {
    label: 'Epidemiology & Infection',
    id: 'epidemiology-and-infection',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/epidemiology-and-infection.csl',
  },
  {
    label: 'Epilepsia',
    id: 'epilepsia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/epilepsia.csl',
  },
  {
    label: 'Equine Veterinary Education',
    id: 'equine-veterinary-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/equine-veterinary-education.csl',
  },
  {
    label: 'Equine Veterinary Journal',
    id: 'equine-veterinary-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/equine-veterinary-journal.csl',
  },
  {
    label: 'Ergo',
    id: 'ergo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ergo.csl',
  },
  {
    label: 'ergoscience',
    id: 'ergoscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ergoscience.csl',
  },
  {
    label: 'Errata: Publicação sobre processos editoriais (Português - Brasil)',
    id: 'errata',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/errata.csl',
  },
  {
    label:
      'Escuela Nacional de Antropología e Historia (autor-fecha, Español - México)',
    id: 'escuela-nacional-de-antropologia-e-historia-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/escuela-nacional-de-antropologia-e-historia-author-date.csl',
  },
  {
    label:
      'Escuela Nacional de Antropología e Historia (nota completa, Español - México)',
    id: 'escuela-nacional-de-antropologia-e-historia-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/escuela-nacional-de-antropologia-e-historia-full-note.csl',
  },
  {
    label:
      'Escuela Nacional de Antropología e Historia (nota corta, Español - México)',
    id: 'escuela-nacional-de-antropologia-e-historia-short-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/escuela-nacional-de-antropologia-e-historia-short-note.csl',
  },
  {
    label: 'Estonian Journal of Earth Sciences',
    id: 'estonian-journal-of-earth-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/estonian-journal-of-earth-sciences.csl',
  },
  {
    label: 'Estuaries and Coasts',
    id: 'estuaries-and-coasts',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/estuaries-and-coasts.csl',
  },
  {
    label: 'Estudios de Cultura Maya (Español - México)',
    id: 'estudios-de-cultura-maya',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/estudios-de-cultura-maya.csl',
  },
  {
    label: 'Estudios de Fonética Experimental',
    id: 'estudios-de-fonetica-experimental',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/estudios-de-fonetica-experimental.csl',
  },
  {
    label: 'Estudios Hispánicos (Español)',
    id: 'estudios-hispanicos',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/estudios-hispanicos.csl',
  },
  {
    label: 'Ethics (for book reviews)',
    id: 'ethics-book-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethics-book-reviews.csl',
  },
  {
    label: 'Ethnobiology and Conservation',
    id: 'ethnobiology-and-conservation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethnobiology-and-conservation.csl',
  },
  {
    label: 'Ethnobiology Letters',
    id: 'ethnobiology-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethnobiology-letters.csl',
  },
  {
    label: 'ethnographiques.org (Français)',
    id: 'ethnographiques-org',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethnographiques-org.csl',
  },
  {
    label: 'Ethnologie française (Français)',
    id: 'ethnologie-francaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethnologie-francaise.csl',
  },
  {
    label: 'Ethnomusicology',
    id: 'ethnomusicology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ethnomusicology.csl',
  },
  {
    label: 'ETRI Journal',
    id: 'etri-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/etri-journal.csl',
  },
  {
    label: 'ÉTS - École de technologie supérieure (Français - Canada)',
    id: 'ets-ecole-de-technologie-superieure',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ets-ecole-de-technologie-superieure.csl',
  },
  {
    label: 'EUNOMÍA. Revista en Cultura de la Legalidad (Español)',
    id: 'eunomia-revista-en-cultura-de-la-legalidad',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eunomia-revista-en-cultura-de-la-legalidad.csl',
  },
  {
    label: 'Eurasian Journal of Medical Investigation',
    id: 'eurasian-journal-of-medical-investigation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eurasian-journal-of-medical-investigation.csl',
  },
  {
    label: 'Eurasian Journal of Medicine and Oncology',
    id: 'eurasian-journal-of-medicine-and-oncology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eurasian-journal-of-medicine-and-oncology.csl',
  },
  {
    label: 'EuroIntervention',
    id: 'eurointervention',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eurointervention.csl',
  },
  {
    label: 'Europace',
    id: 'europace',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/europace.csl',
  },
  {
    label: 'European Cells & Materials',
    id: 'european-cells-and-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-cells-and-materials.csl',
  },
  {
    label: 'European Journal for Philosophy of Religion',
    id: 'european-journal-for-philosophy-of-religion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-for-philosophy-of-religion.csl',
  },
  {
    label: 'European Journal of Anaesthesiology',
    id: 'european-journal-of-anaesthesiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-anaesthesiology.csl',
  },
  {
    label: 'European Journal of Clinical Microbiology & Infectious Diseases',
    id: 'european-journal-of-clinical-microbiology-and-infectious-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-clinical-microbiology-and-infectious-diseases.csl',
  },
  {
    label: 'European Journal of Emergency Medicine',
    id: 'european-journal-of-emergency-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-emergency-medicine.csl',
  },
  {
    label: 'European Journal of Endocrinology',
    id: 'european-journal-of-endocrinology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-endocrinology.csl',
  },
  {
    label: 'European Journal of Entomology',
    id: 'european-journal-of-entomology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-entomology.csl',
  },
  {
    label: 'European Journal of Human Genetics',
    id: 'european-journal-of-human-genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-human-genetics.csl',
  },
  {
    label: 'European Journal of Immunology',
    id: 'european-journal-of-immunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-immunology.csl',
  },
  {
    label: 'European Journal of Information Systems',
    id: 'european-journal-of-information-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-information-systems.csl',
  },
  {
    label: 'European Journal of International Law',
    id: 'european-journal-of-international-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-international-law.csl',
  },
  {
    label: 'European Journal of Microbiology & Immunology',
    id: 'european-journal-of-microbiology-and-immunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-microbiology-and-immunology.csl',
  },
  {
    label: 'European Journal of Neuroscience',
    id: 'european-journal-of-neuroscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-neuroscience.csl',
  },
  {
    label: 'European Journal of Ophthalmology',
    id: 'european-journal-of-ophthalmology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-ophthalmology.csl',
  },
  {
    label: 'European Journal of Paediatric Neurology',
    id: 'european-journal-of-paediatric-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-paediatric-neurology.csl',
  },
  {
    label: 'European Journal of Pain',
    id: 'european-journal-of-pain',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-pain.csl',
  },
  {
    label: 'European Journal of Political Research',
    id: 'european-journal-of-political-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-political-research.csl',
  },
  {
    label: 'European Journal of Public Health',
    id: 'european-journal-of-public-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-public-health.csl',
  },
  {
    label: 'European Journal of Soil Science',
    id: 'european-journal-of-soil-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-soil-science.csl',
  },
  {
    label: 'European Journal of Taxonomy',
    id: 'european-journal-of-taxonomy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-taxonomy.csl',
  },
  {
    label: 'European Journal of Theology',
    id: 'european-journal-of-theology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-theology.csl',
  },
  {
    label: 'European Journal of Ultrasound (Ultraschall in der Medizin)',
    id: 'european-journal-of-ultrasound',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-ultrasound.csl',
  },
  {
    label: 'European Journal of Vascular and Endovascular Surgery',
    id: 'european-journal-of-vascular-and-endovascular-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-journal-of-vascular-and-endovascular-surgery.csl',
  },
  {
    label: 'European Respiratory Journal',
    id: 'european-respiratory-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-respiratory-journal.csl',
  },
  {
    label: 'European Retail Research',
    id: 'european-retail-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-retail-research.csl',
  },
  {
    label: 'European Review of Agricultural Economics',
    id: 'european-review-of-agricultural-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-review-of-agricultural-economics.csl',
  },
  {
    label: 'European Review of International Studies',
    id: 'european-review-of-international-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-review-of-international-studies.csl',
  },
  {
    label: 'European Society of Cardiology',
    id: 'european-society-of-cardiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-society-of-cardiology.csl',
  },
  {
    label: 'European Union - Interinstitutional Style Guide (author-date)',
    id: 'european-union-interinstitutional-style-guide-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-union-interinstitutional-style-guide-author-date.csl',
  },
  {
    label: 'European Union - Interinstitutional Style Guide (note)',
    id: 'european-union-interinstitutional-style-guide',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/european-union-interinstitutional-style-guide.csl',
  },
  {
    label: 'EVA Berlin Konferenz (Deutsch)',
    id: 'eva-berlin-konferenz',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eva-berlin-konferenz.csl',
  },
  {
    label: 'Evidence-Based Complementary and Alternative Medicine',
    id: 'evidence-based-complementary-and-alternative-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evidence-based-complementary-and-alternative-medicine.csl',
  },
  {
    label: 'Evolution & Development',
    id: 'evolution-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evolution-and-development.csl',
  },
  {
    label: 'Evolution Letters',
    id: 'evolution-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evolution-letters.csl',
  },
  {
    label: 'Evolution',
    id: 'evolution',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evolution.csl',
  },
  {
    label: 'Evolutionary Anthropology',
    id: 'evolutionary-anthropology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evolutionary-anthropology.csl',
  },
  {
    label: 'Evolutionary Ecology Research',
    id: 'evolutionary-ecology-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/evolutionary-ecology-research.csl',
  },
  {
    label: 'EXCLI Journal',
    id: 'excli-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/excli-journal.csl',
  },
  {
    label: 'exercer (Français)',
    id: 'exercer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/exercer.csl',
  },
  {
    label: 'Experimental Biology and Medicine',
    id: 'experimental-biology-and-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/experimental-biology-and-medicine.csl',
  },
  {
    label: 'Experimental Biomedical Research',
    id: 'experimental-biomedical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/experimental-biomedical-research.csl',
  },
  {
    label: 'Experimental Dermatology',
    id: 'experimental-dermatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/experimental-dermatology.csl',
  },
  {
    label: 'Expert Reviews in Molecular Medicine',
    id: 'expert-reviews-in-molecular-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/expert-reviews-in-molecular-medicine.csl',
  },
  {
    label: 'Exploration of Targeted Anti-tumor Therapy',
    id: 'exploration-of-targeted-anti-tumor-therapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/exploration-of-targeted-anti-tumor-therapy.csl',
  },
  {
    label: 'eXPRESS Polymer Letters',
    id: 'express-polymer-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/express-polymer-letters.csl',
  },
  {
    label: 'Extracellular Vesicles and Circulating Nucleic Acids',
    id: 'extracellular-vesicles-and-circulating-nucleic-acids',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/extracellular-vesicles-and-circulating-nucleic-acids.csl',
  },
  {
    label: 'Eye',
    id: 'eye',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/eye.csl',
  },
  {
    label: 'Fachhochschule Kiel - Fachbereich Medien (Deutsch)',
    id: 'fachhochschule-kiel-fachbereich-medien',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fachhochschule-kiel-fachbereich-medien.csl',
  },
  {
    label: 'Fachhochschule Südwestfalen (Deutsch)',
    id: 'fachhochschule-sudwestfalen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fachhochschule-sudwestfalen.csl',
  },
  {
    label: 'Fachhochschule Vorarlberg (author-date)',
    id: 'fachhochschule-vorarlberg-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fachhochschule-vorarlberg-author-date.csl',
  },
  {
    label: 'Fachhochschule Vorarlberg (note)',
    id: 'fachhochschule-vorarlberg-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fachhochschule-vorarlberg-note.csl',
  },
  {
    label: 'Facial Plastic Surgery Clinics of North America',
    id: 'facial-plastic-surgery-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/facial-plastic-surgery-clinics-of-north-america.csl',
  },
  {
    label:
      "Facoltà Teologica dell'Italia Settentrionale - Milano (titoli di riviste non abbreviati, Italiano)",
    id: 'facolta-teologica-dell-italia-settentrionale-milano',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/facolta-teologica-dell-italia-settentrionale-milano.csl',
  },
  {
    label: 'Family Business Review',
    id: 'family-business-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/family-business-review.csl',
  },
  {
    label: 'Farmeconomia. Health Economics and Therapeutic Pathways',
    id: 'farmeconomia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/farmeconomia.csl',
  },
  {
    label: 'Fatigue & Fracture of Engineering Materials & Structures',
    id: 'fatigue-and-fracture-of-engineering-materials-and-structures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fatigue-and-fracture-of-engineering-materials-and-structures.csl',
  },
  {
    label: 'Feminist Economics',
    id: 'feminist-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/feminist-economics.csl',
  },
  {
    label: 'Feminist Theory',
    id: 'feminist-theory',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/feminist-theory.csl',
  },
  {
    label: 'Ferdinand Porsche Fernfachhochschule (Deutsch - Österreich)',
    id: 'ferdinand-porsche-fern-fachhochschule',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ferdinand-porsche-fern-fachhochschule.csl',
  },
  {
    label: 'Fertility and Sterility',
    id: 'fertility-and-sterility',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fertility-and-sterility.csl',
  },
  {
    label: 'Finance and Society',
    id: 'finance-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/finance-and-society.csl',
  },
  {
    label: 'FinanzArchiv - Public Finance Analysis',
    id: 'finanzarchiv',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/finanzarchiv.csl',
  },
  {
    label: 'Fine Focus',
    id: 'fine-focus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fine-focus.csl',
  },
  {
    label: 'First Break',
    id: 'first-break',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/first-break.csl',
  },
  {
    label: 'First Monday',
    id: 'first-monday',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/first-monday.csl',
  },
  {
    label: 'Fishery Bulletin',
    id: 'fishery-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fishery-bulletin.csl',
  },
  {
    label: 'Flavour and Fragrance Journal',
    id: 'flavour-and-fragrance-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/flavour-and-fragrance-journal.csl',
  },
  {
    label: 'Florida Entomologist',
    id: 'florida-entomologist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/florida-entomologist.csl',
  },
  {
    label: 'Focaal—Journal of Global and Historical Anthropology',
    id: 'focaal-journal-of-global-and-historical-anthropology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/focaal-journal-of-global-and-historical-anthropology.csl',
  },
  {
    label: 'Sascha Foerster - Geisteswissenschaft (Deutsch)',
    id: 'foerster-geisteswissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/foerster-geisteswissenschaft.csl',
  },
  {
    label: 'FOLD&R (Fasti On Line Documents & Research)',
    id: 'fold-and-r',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fold-and-r.csl',
  },
  {
    label: 'Folia Biologica',
    id: 'folia-biologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/folia-biologica.csl',
  },
  {
    label: 'Folia Morphologia',
    id: 'folia-morphologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/folia-morphologia.csl',
  },
  {
    label: 'Food and Agriculture Organization of the United Nations (numeric)',
    id: 'food-and-agriculture-organization-of-the-united-nations-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/food-and-agriculture-organization-of-the-united-nations-numeric.csl',
  },
  {
    label: 'Food and Agriculture Organization of the United Nations',
    id: 'food-and-agriculture-organization-of-the-united-nations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/food-and-agriculture-organization-of-the-united-nations.csl',
  },
  {
    label: 'Food Science and Biotechnology',
    id: 'food-science-and-biotechnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/food-science-and-biotechnology.csl',
  },
  {
    label: 'Forensic Anthropology',
    id: 'forensic-anthropology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forensic-anthropology.csl',
  },
  {
    label: 'Forensic Science Review',
    id: 'forensic-science-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forensic-science-review.csl',
  },
  {
    label: 'Forest Science',
    id: 'forest-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forest-science.csl',
  },
  {
    label: 'Forschungsjournal Soziale Bewegungen FJSB(German)',
    id: 'forschungsjournal-soziale-bewegungen-fjsb',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forschungsjournal-soziale-bewegungen-fjsb.csl',
  },
  {
    label: 'Forum: Qualitative Social Research (English)',
    id: 'forum-qualitative-social-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forum-qualitative-social-research.csl',
  },
  {
    label: 'Forum: Qualitative Sozialforschung (Deutsch)',
    id: 'forum-qualitative-sozialforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/forum-qualitative-sozialforschung.csl',
  },
  {
    label:
      'Frattura ed Integrità Strutturale - Fracture and Structural Integrity',
    id: 'frattura-ed-integrita-strutturale-fracture-and-structural-integrity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frattura-ed-integrita-strutturale-fracture-and-structural-integrity.csl',
  },
  {
    label: 'Free Radical Research',
    id: 'free-radical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/free-radical-research.csl',
  },
  {
    label: 'Freie Hochschule Stuttgart (Deutsch)',
    id: 'freie-hochschule-stuttgart',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/freie-hochschule-stuttgart.csl',
  },
  {
    label: 'Freie Universität Berlin - Geographische Wissenschaften (Deutsch)',
    id: 'freie-universitat-berlin-geographische-wissenschaften',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/freie-universitat-berlin-geographische-wissenschaften.csl',
  },
  {
    label: 'French Politics',
    id: 'french-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/french-politics.csl',
  },
  {
    label: 'France (tous les auteurs, numérotation, Français)',
    id: 'french1',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/french1.csl',
  },
  {
    label: 'France (auteurs et al., numérotation, Français)',
    id: 'french2',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/french2.csl',
  },
  {
    label: 'France (tous les auteurs, auteur-date, Français)',
    id: 'french3',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/french3.csl',
  },
  {
    label: 'France (auteurs et al., auteur-date, Français)',
    id: 'french4',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/french4.csl',
  },
  {
    label: 'Freshwater Biology',
    id: 'freshwater-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/freshwater-biology.csl',
  },
  {
    label: 'Freshwater Crayfish',
    id: 'freshwater-crayfish',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/freshwater-crayfish.csl',
  },
  {
    label: 'Freshwater Science',
    id: 'freshwater-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/freshwater-science.csl',
  },
  {
    label:
      'Friedrich-Schiller-Universität Jena - Medizinische Fakultät (Deutsch)',
    id: 'friedrich-schiller-universitat-jena-medizinische-fakultat',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/friedrich-schiller-universitat-jena-medizinische-fakultat.csl',
  },
  {
    label: 'Frontiers in Bioscience',
    id: 'frontiers-in-bioscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-in-bioscience.csl',
  },
  {
    label: 'Frontiers in Ecology and the Environment',
    id: 'frontiers-in-ecology-and-the-environment',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-in-ecology-and-the-environment.csl',
  },
  {
    label: 'Frontiers in Optics',
    id: 'frontiers-in-optics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-in-optics.csl',
  },
  {
    label: 'Frontiers in Physics',
    id: 'frontiers-in-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-in-physics.csl',
  },
  {
    label: 'Frontiers medical journals',
    id: 'frontiers-medical-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-medical-journals.csl',
  },
  {
    label: 'Frontiers of Biogeography',
    id: 'frontiers-of-biogeography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers-of-biogeography.csl',
  },
  {
    label: 'Frontiers journals',
    id: 'frontiers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/frontiers.csl',
  },
  {
    label: 'Fundamental and Applied Limnology',
    id: 'fundamental-and-applied-limnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/fundamental-and-applied-limnology.csl',
  },
  {
    label: 'Future Medicine journals',
    id: 'future-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/future-medicine.csl',
  },
  {
    label: 'Future Science Group',
    id: 'future-science-group',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/future-science-group.csl',
  },
  {
    label: 'G. Giappichelli Editore (Italiano)',
    id: 'g-giappichelli-editore',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/g-giappichelli-editore.csl',
  },
  {
    label: 'G3: Genes, Genomes, Genetics',
    id: 'g3',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/g3.csl',
  },
  {
    label: 'Gaceta Sanitaria',
    id: 'gaceta-sanitaria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gaceta-sanitaria.csl',
  },
  {
    label: 'GAIA',
    id: 'gaia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gaia.csl',
  },
  {
    label: 'Galatasaray Üniversitesi Sosyal Bilimler Enstitüsü',
    id: 'galatasaray-universitesi-sosyal-bilimler-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/galatasaray-universitesi-sosyal-bilimler-enstitusu.csl',
  },
  {
    label: 'Gallia Préhistoire (Français)',
    id: 'gallia-prehistoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gallia-prehistoire.csl',
  },
  {
    label: 'Gallia (Français)',
    id: 'gallia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gallia.csl',
  },
  {
    label: 'Gastroenterology',
    id: 'gastroenterology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gastroenterology.csl',
  },
  {
    label: 'Gastrointestinal Endoscopy Clinics of North America',
    id: 'gastrointestinal-endoscopy-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gastrointestinal-endoscopy-clinics-of-north-america.csl',
  },
  {
    label: 'Gastrointestinal Intervention',
    id: 'gastrointestinal-intervention',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gastrointestinal-intervention.csl',
  },
  {
    label: 'Gazeta Médica',
    id: 'gazeta-medica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gazeta-medica.csl',
  },
  {
    label: 'Geistes- und Kulturwissenschaften (Heilmann) (Deutsch)',
    id: 'geistes-und-kulturwissenschaften-heilmann',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geistes-und-kulturwissenschaften-heilmann.csl',
  },
  {
    label: 'Gender & Society',
    id: 'gender-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gender-and-society.csl',
  },
  {
    label: 'Generic Style Rules for Linguistics',
    id: 'generic-style-rules-for-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/generic-style-rules-for-linguistics.csl',
  },
  {
    label: 'Genes, Brain and Behavior',
    id: 'genes-brain-and-behavior',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genes-brain-and-behavior.csl',
  },
  {
    label: 'Genes to Cells',
    id: 'genes-to-cells',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genes-to-cells.csl',
  },
  {
    label: 'Genèses: Sciences sociales et histoire (Français)',
    id: 'geneses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geneses.csl',
  },
  {
    label: 'Genetics and Molecular Biology',
    id: 'genetics-and-molecular-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genetics-and-molecular-biology.csl',
  },
  {
    label: 'Genetics',
    id: 'genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genetics.csl',
  },
  {
    label: 'Genome Biology and Evolution',
    id: 'genome-biology-and-evolution',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genome-biology-and-evolution.csl',
  },
  {
    label: 'Genomics & Informatics',
    id: 'genomics-and-informatics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/genomics-and-informatics.csl',
  },
  {
    label: 'Geoarchaeology',
    id: 'geoarchaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geoarchaeology.csl',
  },
  {
    label: 'Geobiology',
    id: 'geobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geobiology.csl',
  },
  {
    label: 'Geochemical Perspectives Letters',
    id: 'geochemical-perspectives-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geochemical-perspectives-letters.csl',
  },
  {
    label: 'Geochimica et Cosmochimica Acta',
    id: 'geochimica-et-cosmochimica-acta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geochimica-et-cosmochimica-acta.csl',
  },
  {
    label: 'Geochronometria',
    id: 'geochronometria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geochronometria.csl',
  },
  {
    label: 'Geografia Fisica e Dinamica Quaternaria',
    id: 'geografia-fisica-e-dinamica-quaternaria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geografia-fisica-e-dinamica-quaternaria.csl',
  },
  {
    label: 'Geografie Sborník ČGS',
    id: 'geografie-sbornik-cgs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geografie-sbornik-cgs.csl',
  },
  {
    label: 'Geographical Analysis',
    id: 'geographical-analysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geographical-analysis.csl',
  },
  {
    label: 'Géographie et cultures (Français)',
    id: 'geographie-et-cultures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geographie-et-cultures.csl',
  },
  {
    label: 'Geographische Zeitschrift',
    id: 'geographische-zeitschrift',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geographische-zeitschrift.csl',
  },
  {
    label: 'Geological Magazine',
    id: 'geological-magazine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geological-magazine.csl',
  },
  {
    label: 'Geophysical Journal International',
    id: 'geophysical-journal-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geophysical-journal-international.csl',
  },
  {
    label: 'Geophysics',
    id: 'geophysics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geophysics.csl',
  },
  {
    label: 'Geopolitics',
    id: 'geopolitics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geopolitics.csl',
  },
  {
    label:
      'Georg-August-Universität Göttingen - Institut für Ethnologie und Ethnologische Sammlung (Deutsch)',
    id: 'georg-august-universitat-gottingen-institut-fur-ethnologie-und-ethnologische-sammlung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/georg-august-universitat-gottingen-institut-fur-ethnologie-und-ethnologische-sammlung.csl',
  },
  {
    label: 'Geriatrics & Gerontology International',
    id: 'geriatrics-and-gerontology-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geriatrics-and-gerontology-international.csl',
  },
  {
    label: 'Gériatrie et Psychologie Neuropsychiatrie du Vieillissement',
    id: 'geriatrie-et-psychologie-neuropsychiatrie-du-vieillissement',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geriatrie-et-psychologie-neuropsychiatrie-du-vieillissement.csl',
  },
  {
    label: 'German Council of Economic Experts',
    id: 'german-council-of-economic-experts',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/german-council-of-economic-experts.csl',
  },
  {
    label: 'German Journal of Agricultural Economics',
    id: 'german-journal-of-agricultural-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/german-journal-of-agricultural-economics.csl',
  },
  {
    label: 'German Yearbook of International Law',
    id: 'german-yearbook-of-international-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/german-yearbook-of-international-law.csl',
  },
  {
    label: 'Geschichte und Gesellschaft',
    id: 'geschichte-und-gesellschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/geschichte-und-gesellschaft.csl',
  },
  {
    label: 'Gesellschaft fur Popularmusikforschung (Deutsch)',
    id: 'gesellschaft-fur-popularmusikforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gesellschaft-fur-popularmusikforschung.csl',
  },
  {
    label: 'Gewerblicher Rechtsschutz und Urheberrecht (Deutsch)',
    id: 'gewerblicher-rechtsschutz-und-urheberrecht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gewerblicher-rechtsschutz-und-urheberrecht.csl',
  },
  {
    label: 'GigaScience',
    id: 'gigascience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gigascience.csl',
  },
  {
    label: 'Global Ecology and Biogeography',
    id: 'global-ecology-and-biogeography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/global-ecology-and-biogeography.csl',
  },
  {
    label: 'Glossa',
    id: 'glossa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/glossa.csl',
  },
  {
    label: 'Gnosis: Journal of Gnostic Studies',
    id: 'gnosis-journal-of-gnostic-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gnosis-journal-of-gnostic-studies.csl',
  },
  {
    label:
      'Russian GOST R 7.0.5-2008 (numeric, sorted alphabetically, Ру́сский)',
    id: 'gost-r-7-0-5-2008-numeric-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gost-r-7-0-5-2008-numeric-alphabetical.csl',
  },
  {
    label: 'Russian GOST R 7.0.5-2008 (numeric)',
    id: 'gost-r-7-0-5-2008-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gost-r-7-0-5-2008-numeric.csl',
  },
  {
    label: 'Russian GOST R 7.0.5-2008 (Ру́сский)',
    id: 'gost-r-7-0-5-2008',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/gost-r-7-0-5-2008.csl',
  },
  {
    label: 'Government and Opposition',
    id: 'government-and-opposition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/government-and-opposition.csl',
  },
  {
    label: 'Grasas y Aceites',
    id: 'grasas-y-aceites',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/grasas-y-aceites.csl',
  },
  {
    label: 'Griffith College - Harvard',
    id: 'griffith-college-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/griffith-college-harvard.csl',
  },
  {
    label: 'Groundwater',
    id: 'groundwater',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/groundwater.csl',
  },
  {
    label: "Groupe d'anthropologie et d'archéologie funéraire (Français)",
    id: 'groupe-danthropologie-et-darcheologie-funeraire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/groupe-danthropologie-et-darcheologie-funeraire.csl',
  },
  {
    label:
      'Guide des citations, références et abréviations juridiques 6e édition (Français)',
    id: 'guide-des-citations-references-et-abreviations-juridiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/guide-des-citations-references-et-abreviations-juridiques.csl',
  },
  {
    label:
      "Guide pour la rédaction et la présentation des thèses à l'usage des doctorants (Français)",
    id: 'guide-pour-la-redaction-et-la-presentation-des-theses-a-lusage-des-doctorants',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/guide-pour-la-redaction-et-la-presentation-des-theses-a-lusage-des-doctorants.csl',
  },
  {
    label: 'Haaga-Helia ammattikorkeakoulu - Harvard',
    id: 'haaga-helia-university-of-applied-sciences-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haaga-helia-university-of-applied-sciences-harvard.csl',
  },
  {
    label: 'Haematologica',
    id: 'haematologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haematologica.csl',
  },
  {
    label: 'Haemophilia',
    id: 'haemophilia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haemophilia.csl',
  },
  {
    label: 'Haffner Style Manual',
    id: 'haffner-style-manual',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haffner-style-manual.csl',
  },
  {
    label: 'Hainan Medical University Journal Publisher',
    id: 'hainan-medical-university-journal-publisher',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hainan-medical-university-journal-publisher.csl',
  },
  {
    label: 'Hamburg School of Food Science (diploma, Deutsch)',
    id: 'hamburg-school-of-food-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hamburg-school-of-food-science.csl',
  },
  {
    label: 'HAND',
    id: 'hand',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hand.csl',
  },
  {
    label: 'Handbook of Clinical Neurology',
    id: 'handbook-of-clinical-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/handbook-of-clinical-neurology.csl',
  },
  {
    label: 'Anglia Ruskin University - Harvard',
    id: 'harvard-anglia-ruskin-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-anglia-ruskin-university.csl',
  },
  {
    label: 'Bournemouth University - Harvard',
    id: 'harvard-bournemouth-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-bournemouth-university.csl',
  },
  {
    label: 'Cape Peninsula University of Technology - Harvard',
    id: 'harvard-cape-peninsula-university-of-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cape-peninsula-university-of-technology.csl',
  },
  {
    label: 'Cite Them Right 10th edition - Harvard',
    id: 'harvard-cite-them-right-10th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cite-them-right-10th-edition.csl',
  },
  {
    label: 'Cite Them Right 11th edition - Harvard',
    id: 'harvard-cite-them-right-11th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cite-them-right-11th-edition.csl',
  },
  {
    label: 'Cite Them Right 12th edition - Harvard (no "et al.")',
    id: 'harvard-cite-them-right-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cite-them-right-no-et-al.csl',
  },
  {
    label: 'Cite Them Right 12th edition - Harvard',
    id: 'harvard-cite-them-right',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cite-them-right.csl',
  },
  {
    label: 'Coventry University - Harvard',
    id: 'harvard-coventry-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-coventry-university.csl',
  },
  {
    label: 'Cranfield University - Harvard',
    id: 'harvard-cranfield-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-cranfield-university.csl',
  },
  {
    label: 'Deakin University - Harvard',
    id: 'harvard-deakin-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-deakin-university.csl',
  },
  {
    label: 'Dundalk Institute of Technology - Harvard',
    id: 'harvard-dundalk-institute-of-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-dundalk-institute-of-technology.csl',
  },
  {
    label: 'Durham University Business School - Harvard',
    id: 'harvard-durham-university-business-school',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-durham-university-business-school.csl',
  },
  {
    label: 'Edge Hill University - Harvard',
    id: 'harvard-edge-hill-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-edge-hill-university.csl',
  },
  {
    label: 'European Archaeology - Harvard',
    id: 'harvard-european-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-european-archaeology.csl',
  },
  {
    label: 'Fachhochschule Salzburg - Harvard',
    id: 'harvard-fachhochschule-salzburg',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-fachhochschule-salzburg.csl',
  },
  {
    label: 'Falmouth University - Harvard',
    id: 'harvard-falmouth-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-falmouth-university.csl',
  },
  {
    label:
      'Gesellschaft für Bildung und Forschung in Europa - Harvard (Deutsch)',
    id: 'harvard-gesellschaft-fur-bildung-und-forschung-in-europa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-gesellschaft-fur-bildung-und-forschung-in-europa.csl',
  },
  {
    label: 'Imperial College London - Harvard',
    id: 'harvard-imperial-college-london',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-imperial-college-london.csl',
  },
  {
    label:
      'Institut für Praxisforschung - Harvard (Bahr & Frackmann) (Deutsch)',
    id: 'harvard-institut-fur-praxisforschung-de',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-institut-fur-praxisforschung-de.csl',
  },
  {
    label: "King's College London - Harvard",
    id: 'harvard-kings-college-london',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-kings-college-london.csl',
  },
  {
    label: 'Leeds Beckett University - Harvard',
    id: 'harvard-leeds-beckett-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-leeds-beckett-university.csl',
  },
  {
    label: 'Leeds Metropolitan University - Harvard',
    id: 'harvard-leeds-metropolitan-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-leeds-metropolitan-university.csl',
  },
  {
    label: 'University of Limerick (Cite it Right) - Harvard',
    id: 'harvard-limerick',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-limerick.csl',
  },
  {
    label: 'London South Bank University - Harvard',
    id: 'harvard-london-south-bank-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-london-south-bank-university.csl',
  },
  {
    label: 'Manchester Business School - Harvard',
    id: 'harvard-manchester-business-school',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-manchester-business-school.csl',
  },
  {
    label: 'Manchester Metropolitan University - Harvard',
    id: 'harvard-manchester-metropolitan-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-manchester-metropolitan-university.csl',
  },
  {
    label: 'Melbourne Polytechnic - Harvard',
    id: 'harvard-melbourne-polytechnic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-melbourne-polytechnic.csl',
  },
  {
    label: 'Newcastle University - Harvard',
    id: 'harvard-newcastle-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-newcastle-university.csl',
  },
  {
    label: 'North-West University - Harvard',
    id: 'harvard-north-west-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-north-west-university.csl',
  },
  {
    label: 'Pontificia Universidad Católica del Ecuador (Español) - Harvard',
    id: 'harvard-pontificia-universidad-catolica-del-ecuador',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-pontificia-universidad-catolica-del-ecuador.csl',
  },
  {
    label: 'Robert Gordon University - Harvard',
    id: 'harvard-robert-gordon-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-robert-gordon-university.csl',
  },
  {
    label: 'Staffordshire University - Harvard',
    id: 'harvard-staffordshire-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-staffordshire-university.csl',
  },
  {
    label: 'Stellenbosch University - Harvard',
    id: 'harvard-stellenbosch-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-stellenbosch-university.csl',
  },
  {
    label: 'Swinburne University of Technology - Harvard',
    id: 'harvard-swinburne-university-of-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-swinburne-university-of-technology.csl',
  },
  {
    label: 'The University of Northampton - Harvard',
    id: 'harvard-the-university-of-northampton',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-the-university-of-northampton.csl',
  },
  {
    label:
      'The University of Sheffield - School of East Asian Studies - Harvard',
    id: 'harvard-the-university-of-sheffield-school-of-east-asian-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-the-university-of-sheffield-school-of-east-asian-studies.csl',
  },
  {
    label: 'The University of Sheffield - Town and Regional Planning - Harvard',
    id: 'harvard-the-university-of-sheffield-town-and-regional-planning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-the-university-of-sheffield-town-and-regional-planning.csl',
  },
  {
    label: 'Theologisches Seminar Adelshofen - Harvard (Deutsch)',
    id: 'harvard-theologisches-seminar-adelshofen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-theologisches-seminar-adelshofen.csl',
  },
  {
    label: 'Universiti Teknologi Malaysia - Harvard',
    id: 'harvard-universiti-teknologi-malaysia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-universiti-teknologi-malaysia.csl',
  },
  {
    label: 'Universiti Tunku Abdul Rahman - Harvard',
    id: 'harvard-universiti-tunku-abdul-rahman',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-universiti-tunku-abdul-rahman.csl',
  },
  {
    label: 'University for the Creative Arts - Harvard',
    id: 'harvard-university-for-the-creative-arts',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-for-the-creative-arts.csl',
  },
  {
    label: 'University of Abertay Dundee - Harvard',
    id: 'harvard-university-of-abertay-dundee',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-abertay-dundee.csl',
  },
  {
    label: 'University of Bath - Harvard',
    id: 'harvard-university-of-bath',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-bath.csl',
  },
  {
    label: 'University of Birmingham - Harvard',
    id: 'harvard-university-of-birmingham',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-birmingham.csl',
  },
  {
    label:
      'University of Brighton School of Environment & Technology - Harvard',
    id: 'harvard-university-of-brighton-school-of-environment-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-brighton-school-of-environment-and-technology.csl',
  },
  {
    label: 'University of Cape Town - Harvard',
    id: 'harvard-university-of-cape-town',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-cape-town.csl',
  },
  {
    label: 'University of Exeter - Geography - Harvard',
    id: 'harvard-university-of-exeter-geography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-exeter-geography.csl',
  },
  {
    label: 'University of Greenwich - Harvard',
    id: 'harvard-university-of-greenwich',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-greenwich.csl',
  },
  {
    label: 'University of Kent - Harvard',
    id: 'harvard-university-of-kent',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-kent.csl',
  },
  {
    label: 'University of Leeds - Harvard',
    id: 'harvard-university-of-leeds',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-leeds.csl',
  },
  {
    label: 'University of Technology Sydney - Harvard',
    id: 'harvard-university-of-technology-sydney',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-technology-sydney.csl',
  },
  {
    label: 'University of the West of England (Bristol) - Harvard',
    id: 'harvard-university-of-the-west-of-england',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-the-west-of-england.csl',
  },
  {
    label: 'University of the West of Scotland - Harvard',
    id: 'harvard-university-of-the-west-of-scotland',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-the-west-of-scotland.csl',
  },
  {
    label: 'University of Westminster - Harvard',
    id: 'harvard-university-of-westminster',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-westminster.csl',
  },
  {
    label: 'University of Wolverhampton - Harvard',
    id: 'harvard-university-of-wolverhampton',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-wolverhampton.csl',
  },
  {
    label: 'University of Worcester - Harvard',
    id: 'harvard-university-of-worcester',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-university-of-worcester.csl',
  },
  {
    label: "Xi'an Jiaotong-Liverpool University (XJTLU) - Harvard",
    id: 'harvard-xi-an-jiaotong-liverpool-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-xi-an-jiaotong-liverpool-university.csl',
  },
  {
    label: 'York St John University - Harvard (pre September 2019 entry)',
    id: 'harvard-york-st-john-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/harvard-york-st-john-university.csl',
  },
  {
    label: 'Haute école de gestion de Genève - ISO 690',
    id: 'haute-ecole-de-gestion-de-geneve-iso-690',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haute-ecole-de-gestion-de-geneve-iso-690.csl',
  },
  {
    label: 'Haute Ecole pédagogique Fribourg (Français)',
    id: 'haute-ecole-pedagogique-fribourg',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/haute-ecole-pedagogique-fribourg.csl',
  },
  {
    label: 'Hawaii International Conference on System Sciences Proceedings',
    id: 'hawaii-international-conference-on-system-sciences-proceedings',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hawaii-international-conference-on-system-sciences-proceedings.csl',
  },
  {
    label: 'Health and Human Rights Journal',
    id: 'health-and-human-rights-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-and-human-rights-journal.csl',
  },
  {
    label: 'Health & Social Care in the Community',
    id: 'health-and-social-care-in-the-community',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-and-social-care-in-the-community.csl',
  },
  {
    label: 'Health Economics, Policy and Law',
    id: 'health-economics-policy-and-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-economics-policy-and-law.csl',
  },
  {
    label: 'Health Economics',
    id: 'health-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-economics.csl',
  },
  {
    label: 'Health Education England - Harvard',
    id: 'health-education-england-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-education-england-harvard.csl',
  },
  {
    label: 'Health Education Research',
    id: 'health-education-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-education-research.csl',
  },
  {
    label: 'Health Physics',
    id: 'health-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-physics.csl',
  },
  {
    label: 'Health Policy and Planning',
    id: 'health-policy-and-planning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-policy-and-planning.csl',
  },
  {
    label: 'Health Reform Observer - Observatoire des Réformes de Santé',
    id: 'health-reform-observer-observatoire-des-reformes-de-sante',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-reform-observer-observatoire-des-reformes-de-sante.csl',
  },
  {
    label: 'Health, Sports & Rehabilitation Medicine',
    id: 'health-sports-and-rehabilitation-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/health-sports-and-rehabilitation-medicine.csl',
  },
  {
    label: 'Heart Failure Clinics',
    id: 'heart-failure-clinics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/heart-failure-clinics.csl',
  },
  {
    label: 'Heart Rhythm',
    id: 'heart-rhythm',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/heart-rhythm.csl',
  },
  {
    label:
      'Heidelberg University - Faculty of Medicine (Universität Heidelberg - Medizinische Fakultät Heidelberg)',
    id: 'heidelberg-university-faculty-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/heidelberg-university-faculty-of-medicine.csl',
  },
  {
    label: 'Heiliger Dienst (Deutsch)',
    id: 'heiliger-dienst',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/heiliger-dienst.csl',
  },
  {
    label: 'Helvetica Chimica Acta',
    id: 'helvetica-chimica-acta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/helvetica-chimica-acta.csl',
  },
  {
    label: 'Hematology/Oncology Clinics of North America',
    id: 'hematology-oncology-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hematology-oncology-clinics-of-north-america.csl',
  },
  {
    label: 'Hemijska industrija',
    id: 'hemijska-industrija',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hemijska-industrija.csl',
  },
  {
    label: 'Henoch',
    id: 'henoch',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/henoch.csl',
  },
  {
    label: 'Hepatology',
    id: 'hepatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hepatology.csl',
  },
  {
    label: 'Heredity',
    id: 'heredity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/heredity.csl',
  },
  {
    label: 'Herpetologica',
    id: 'herpetologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/herpetologica.csl',
  },
  {
    label: 'Hiob Ludolf Centre for Ethiopian Studies (long names)',
    id: 'hiob-ludolf-centre-for-ethiopian-studies-long-names',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hiob-ludolf-centre-for-ethiopian-studies-long-names.csl',
  },
  {
    label: 'Hiob Ludolf Centre for Ethiopian Studies (with URL/DOI)',
    id: 'hiob-ludolf-centre-for-ethiopian-studies-with-url-doi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hiob-ludolf-centre-for-ethiopian-studies-with-url-doi.csl',
  },
  {
    label: 'Hiob Ludolf Centre for Ethiopian Studies',
    id: 'hiob-ludolf-centre-for-ethiopian-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hiob-ludolf-centre-for-ethiopian-studies.csl',
  },
  {
    label: 'Hipertensión y Riesgo Vascular (Español)',
    id: 'hipertension-y-riesgo-vascular',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hipertension-y-riesgo-vascular.csl',
  },
  {
    label: 'Histoire@Politique. Politique, culture, société (Français)',
    id: 'histoire-at-politique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/histoire-at-politique.csl',
  },
  {
    label: 'Histoire & Mesure (Français)',
    id: 'histoire-et-mesure',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/histoire-et-mesure.csl',
  },
  {
    label: 'Histopathology',
    id: 'histopathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/histopathology.csl',
  },
  {
    label: 'historia-scribere (Deutsch)',
    id: 'historia-scribere',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/historia-scribere.csl',
  },
  {
    label: 'Historical Materialism',
    id: 'historical-materialism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/historical-materialism.csl',
  },
  {
    label: 'Historical Social Research',
    id: 'historical-social-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/historical-social-research.csl',
  },
  {
    label: 'historioPLUS (Deutsch - Österreich)',
    id: 'historio-plus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/historio-plus.csl',
  },
  {
    label: 'History and Theory',
    id: 'history-and-theory',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/history-and-theory.csl',
  },
  {
    label: 'History Australia',
    id: 'history-australia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/history-australia.csl',
  },
  {
    label: 'History of the Human Sciences',
    id: 'history-of-the-human-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/history-of-the-human-sciences.csl',
  },
  {
    label: 'Hochschule Bonn-Rhein-Sieg (Harvard, Deutsch)',
    id: 'hochschule-bonn-rhein-sieg',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-bonn-rhein-sieg.csl',
  },
  {
    label: 'Hochschule für Soziale Arbeit FHNW (Deutsch - Schweiz)',
    id: 'hochschule-fur-soziale-arbeit-fhnw',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-fur-soziale-arbeit-fhnw.csl',
  },
  {
    label: 'Hochschule für Wirtschaft und Recht Berlin (Deutsch)',
    id: 'hochschule-fur-wirtschaft-und-recht-berlin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-fur-wirtschaft-und-recht-berlin.csl',
  },
  {
    label: 'Hochschule Hannover - Soziale Arbeit (Deutsch)',
    id: 'hochschule-hannover-soziale-arbeit',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-hannover-soziale-arbeit.csl',
  },
  {
    label:
      'Hochschule München - Fakultät für Angewandte Sozialwissenschaften (Deutsch)',
    id: 'hochschule-munchen-fakultat-fur-angewandte-sozialwissenschaften',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-munchen-fakultat-fur-angewandte-sozialwissenschaften.csl',
  },
  {
    label:
      'Hochschule Osnabrück - Fakultät Agrarwissenschaften und Landschaftsarchitektur (Deutsch)',
    id: 'hochschule-osnabruck-fakultat-agrarwissenschaften-und-landschaftsarchitektur',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-osnabruck-fakultat-agrarwissenschaften-und-landschaftsarchitektur.csl',
  },
  {
    label: 'Hochschule Pforzheim - Fakultät für Wirtschaft und Recht (Deutsch)',
    id: 'hochschule-pforzheim-fakultat-fur-wirtschaft-und-recht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hochschule-pforzheim-fakultat-fur-wirtschaft-und-recht.csl',
  },
  {
    label: 'Hong Kong Journal of Radiology',
    id: 'hong-kong-journal-of-radiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hong-kong-journal-of-radiology.csl',
  },
  {
    label: 'Hospital a Domicilio',
    id: 'hospital-a-domicilio',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hospital-a-domicilio.csl',
  },
  {
    label: 'Housing Studies',
    id: 'housing-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/housing-studies.csl',
  },
  {
    label: 'HPB',
    id: 'hpb',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hpb.csl',
  },
  {
    label: 'Human Brain Mapping',
    id: 'human-brain-mapping',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-brain-mapping.csl',
  },
  {
    label: 'Human Ecology',
    id: 'human-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-ecology.csl',
  },
  {
    label: 'Human Molecular Genetics',
    id: 'human-molecular-genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-molecular-genetics.csl',
  },
  {
    label: 'Human Mutation',
    id: 'human-mutation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-mutation.csl',
  },
  {
    label: 'Human Reproduction Update',
    id: 'human-reproduction-update',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-reproduction-update.csl',
  },
  {
    label: 'Human Reproduction',
    id: 'human-reproduction',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-reproduction.csl',
  },
  {
    label: 'Human Resource Management Journal',
    id: 'human-resource-management-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-resource-management-journal.csl',
  },
  {
    label: 'Human Rights Law Review',
    id: 'human-rights-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-rights-law-review.csl',
  },
  {
    label: 'Human-Wildlife Interactions',
    id: 'human-wildlife-interactions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/human-wildlife-interactions.csl',
  },
  {
    label: 'Humanistica Lovaniensia. Journal of Neo-Latin Studies',
    id: 'humanistica-lovaniensia-journal-of-neo-latin-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/humanistica-lovaniensia-journal-of-neo-latin-studies.csl',
  },
  {
    label: 'Humboldt State University - Environmental Resources Engineering',
    id: 'humboldt-state-university-environmental-resources-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/humboldt-state-university-environmental-resources-engineering.csl',
  },
  {
    label: 'Hydrobiologia',
    id: 'hydrobiologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hydrobiologia.csl',
  },
  {
    label: 'Hydrological Processes',
    id: 'hydrological-processes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hydrological-processes.csl',
  },
  {
    label: 'Hydrological Sciences Journal',
    id: 'hydrological-sciences-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hydrological-sciences-journal.csl',
  },
  {
    label: 'Hypertension Research',
    id: 'hypertension-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hypertension-research.csl',
  },
  {
    label: 'Hypotheses in the Life Sciences',
    id: 'hypotheses-in-the-life-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hypotheses-in-the-life-sciences.csl',
  },
  {
    label: 'Hystrix, the Italian Journal of Mammalogy',
    id: 'hystrix-the-italian-journal-of-mammalogy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/hystrix-the-italian-journal-of-mammalogy.csl',
  },
  {
    label: 'IAINU Tuban - Fakultas Tarbiyah (Bahasa Indonesia)',
    id: 'iainutuban-tarbiyah',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iainutuban-tarbiyah.csl',
  },
  {
    label: 'IAWA Journal',
    id: 'iawa-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iawa-journal.csl',
  },
  {
    label: 'I.B. Tauris (note)',
    id: 'ib-tauris-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ib-tauris-note.csl',
  },
  {
    label: 'Ibis',
    id: 'ibis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ibis.csl',
  },
  {
    label: 'ICES Journal of Marine Science',
    id: 'ices-journal-of-marine-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ices-journal-of-marine-science.csl',
  },
  {
    label:
      'Időjárás - Quarterly Journal of the Hungarian Meteorological Service',
    id: 'idojaras-quarterly-journal-of-the-hungarian-meteorological-service',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/idojaras-quarterly-journal-of-the-hungarian-meteorological-service.csl',
  },
  {
    label: 'IE Comunicaciones',
    id: 'ie-comunicaciones',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ie-comunicaciones.csl',
  },
  {
    label: 'IEEE Transactions on Medical Imaging',
    id: 'ieee-transactions-on-medical-imaging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ieee-transactions-on-medical-imaging.csl',
  },
  {
    label: 'IEEE (with URL)',
    id: 'ieee-with-url',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ieee-with-url.csl',
  },
  {
    label: 'IEEE',
    id: 'ieee',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ieee.csl',
  },
  {
    label: 'iForest',
    id: 'iforest',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iforest.csl',
  },
  {
    label: 'Igaku Toshokan (日本語)',
    id: 'igaku-toshokan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/igaku-toshokan.csl',
  },
  {
    label: 'IICA-CATIE (Español)',
    id: 'iica-catie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iica-catie.csl',
  },
  {
    label: 'Ilahiyat Studies (full note)',
    id: 'ilahiyat-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ilahiyat-studies.csl',
  },
  {
    label: 'Im Gespräch - Hefte der Martin Buber-Gesellschaft (Deutsch)',
    id: 'im-gesprach',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/im-gesprach.csl',
  },
  {
    label: 'INContext: Studies in Translation and Interculturalism',
    id: 'incontext-studies-in-translation-and-interculturalism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/incontext-studies-in-translation-and-interculturalism.csl',
  },
  {
    label: 'Indian Dermatology Online Journal',
    id: 'indian-dermatology-online-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indian-dermatology-online-journal.csl',
  },
  {
    label: 'Indian Journal of Medical Research',
    id: 'indian-journal-of-medical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indian-journal-of-medical-research.csl',
  },
  {
    label: 'Indian Journal of Orthopaedics',
    id: 'indian-journal-of-orthopaedics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indian-journal-of-orthopaedics.csl',
  },
  {
    label: 'Indian Journal of Physics',
    id: 'indian-journal-of-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indian-journal-of-physics.csl',
  },
  {
    label: 'Indian Journal of Traditional Knowledge',
    id: 'indian-journal-of-traditional-knowledge',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indian-journal-of-traditional-knowledge.csl',
  },
  {
    label: 'INDIANA',
    id: 'indiana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indiana.csl',
  },
  {
    label: 'Indoor Air',
    id: 'indoor-air',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/indoor-air.csl',
  },
  {
    label: 'Industrial Relations',
    id: 'industrial-relations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/industrial-relations.csl',
  },
  {
    label: 'Infectio (Español)',
    id: 'infectio',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infectio.csl',
  },
  {
    label: 'Infectious Disease Clinics of North America',
    id: 'infectious-disease-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infectious-disease-clinics-of-north-america.csl',
  },
  {
    label: 'Inflammatory Bowel Diseases',
    id: 'inflammatory-bowel-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inflammatory-bowel-diseases.csl',
  },
  {
    label: 'Influenza and Other Respiratory Viruses',
    id: 'influenza-and-other-respiratory-viruses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/influenza-and-other-respiratory-viruses.csl',
  },
  {
    label: 'infoclio.ch (Kurzbelege, Deutsch - Schweiz)',
    id: 'infoclio-de-kurzbelege',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infoclio-de-kurzbelege.csl',
  },
  {
    label: 'infoclio.ch (Deutsch - Schweiz)',
    id: 'infoclio-de',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infoclio-de.csl',
  },
  {
    label: 'infoclio.ch (sans majuscules, Français)',
    id: 'infoclio-fr-nocaps',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infoclio-fr-nocaps.csl',
  },
  {
    label: 'infoclio.ch (petites majuscules, Français)',
    id: 'infoclio-fr-smallcaps',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infoclio-fr-smallcaps.csl',
  },
  {
    label: 'Infomin',
    id: 'infomin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/infomin.csl',
  },
  {
    label: 'Informal Logic',
    id: 'informal-logic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/informal-logic.csl',
  },
  {
    label: 'Ingeniería Agrícola (Español)',
    id: 'ingenieria-agricola',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ingenieria-agricola.csl',
  },
  {
    label: 'Innovations & Thérapeutiques en Oncologie',
    id: 'innovations-therapeutiques-en-oncologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/innovations-therapeutiques-en-oncologie.csl',
  },
  {
    label: 'INSTAP Academic Press',
    id: 'instap-academic-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instap-academic-press.csl',
  },
  {
    label: "Institut français d'archéologie orientale - Arab Studies (English)",
    id: 'institut-francais-darcheologie-orientale-arab-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-francais-darcheologie-orientale-arab-studies.csl',
  },
  {
    label: "Institut français d'archéologie orientale - Egyptology (English)",
    id: 'institut-francais-darcheologie-orientale-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-francais-darcheologie-orientale-en.csl',
  },
  {
    label:
      "Institut français d'archéologie orientale - études arabes (Français)",
    id: 'institut-francais-darcheologie-orientale-etudes-arabes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-francais-darcheologie-orientale-etudes-arabes.csl',
  },
  {
    label:
      "Institut français d'archéologie orientale - archéologie et égyptologie (Français)",
    id: 'institut-francais-darcheologie-orientale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-francais-darcheologie-orientale.csl',
  },
  {
    label:
      'Institut national de la recherche scientifique - Sciences sociales (author-date, Français)',
    id: 'institut-national-de-la-recherche-scientifique-sciences-sociales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-national-de-la-recherche-scientifique-sciences-sociales.csl',
  },
  {
    label:
      'Institut national de recherches archéologiques préventives (Français)',
    id: 'institut-national-de-recherches-archeologiques-preventives',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-national-de-recherches-archeologiques-preventives.csl',
  },
  {
    label:
      'Institut national de santé publique du Québec - NAPP (Français - Canada)',
    id: 'institut-national-de-sante-publique-du-quebec-napp',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-national-de-sante-publique-du-quebec-napp.csl',
  },
  {
    label:
      'Institut national de santé publique du Québec - TOPO (Français - Canada)',
    id: 'institut-national-de-sante-publique-du-quebec-topo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-national-de-sante-publique-du-quebec-topo.csl',
  },
  {
    label:
      'Institut Pertanian Bogor: Pedoman Penulisan Karya Ilmiah Edisi ke-3 (Bahasa Indonesia)',
    id: 'institut-pertanian-bogor',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-pertanian-bogor.csl',
  },
  {
    label: 'Institut Teknologi Bandung - Sekolah Pascasarjana',
    id: 'institut-teknologi-bandung-sekolah-pascasarjana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institut-teknologi-bandung-sekolah-pascasarjana.csl',
  },
  {
    label: 'Institute for Operations Research and the Management Sciences',
    id: 'institute-for-operations-research-and-the-management-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institute-for-operations-research-and-the-management-sciences.csl',
  },
  {
    label: 'Institute of Mathematical Statistics journals',
    id: 'institute-of-mathematical-statistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institute-of-mathematical-statistics.csl',
  },
  {
    label: 'Institute of Mathematics and its Applications',
    id: 'institute-of-mathematics-and-its-applications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institute-of-mathematics-and-its-applications.csl',
  },
  {
    label: 'Institute of Physics - Harvard',
    id: 'institute-of-physics-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institute-of-physics-harvard.csl',
  },
  {
    label: 'Institute of Physics (numeric)',
    id: 'institute-of-physics-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/institute-of-physics-numeric.csl',
  },
  {
    label:
      'Instituto Brasileiro de Informação em Ciência e Tecnologia - ABNT (autoria abreviada)',
    id: 'instituto-brasileiro-de-informacao-em-ciencia-e-tecnologia-abnt-initials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-brasileiro-de-informacao-em-ciencia-e-tecnologia-abnt-initials.csl',
  },
  {
    label:
      'Instituto Brasileiro de Informação em Ciência e Tecnologia - ABNT (autoria completa)',
    id: 'instituto-brasileiro-de-informacao-em-ciencia-e-tecnologia-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-brasileiro-de-informacao-em-ciencia-e-tecnologia-abnt.csl',
  },
  {
    label:
      'Instituto de Investigaciones sobre la Universidad y la Educación - Moderno (autor-fecha, Español)',
    id: 'instituto-de-investigaciones-sobre-la-universidad-y-la-educacion-moderno',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-de-investigaciones-sobre-la-universidad-y-la-educacion-moderno.csl',
  },
  {
    label:
      'Instituto de Pesquisas Energéticas e Nucleares (Português - Brasil)',
    id: 'instituto-de-pesquisas-energeticas-e-nucleares',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-de-pesquisas-energeticas-e-nucleares.csl',
  },
  {
    label: 'Instituto de Pesquisas Tecnológicas (Português - Brasil)',
    id: 'instituto-de-pesquisas-tecnologicas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-de-pesquisas-tecnologicas.csl',
  },
  {
    label: 'Instituto Superior de Teología de las Islas Canarias (Español)',
    id: 'instituto-superior-de-teologia-de-las-islas-canarias',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/instituto-superior-de-teologia-de-las-islas-canarias.csl',
  },
  {
    label: 'Integrated Science Publishing journals',
    id: 'integrated-science-publishing-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/integrated-science-publishing-journals.csl',
  },
  {
    label: 'Integrative & Comparative Biology',
    id: 'integrative-and-comparative-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/integrative-and-comparative-biology.csl',
  },
  {
    label: 'Intellect Newgen Books',
    id: 'intellect-newgen-books',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/intellect-newgen-books.csl',
  },
  {
    label: 'Inter-Research Science Center',
    id: 'inter-research-science-center',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inter-research-science-center.csl',
  },
  {
    label: 'INTER: Romanian Review for Theological and Religious Studies',
    id: 'inter-ro',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inter-ro.csl',
  },
  {
    label: 'Interaction Design & Architecture(s)',
    id: 'interaction-design-and-architectures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interaction-design-and-architectures.csl',
  },
  {
    label: 'Interactive CardioVascular and Thoracic Surgery',
    id: 'interactive-cardiovascular-and-thoracic-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interactive-cardiovascular-and-thoracic-surgery.csl',
  },
  {
    label: 'Interdisziplinäre Anthropologie (Deutsch)',
    id: 'interdisziplinare-anthropologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interdisziplinare-anthropologie.csl',
  },
  {
    label: 'Interdisziplinäre Zeitschrift für Technologie und Lernen (Deutsch)',
    id: 'interdisziplinare-zeitschrift-fur-technologie-und-lernen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interdisziplinare-zeitschrift-fur-technologie-und-lernen.csl',
  },
  {
    label: 'Interkulturelle Germanistik Göttingen (Deutsch)',
    id: 'interkulturelle-germanistik-gottingen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interkulturelle-germanistik-gottingen.csl',
  },
  {
    label: 'International Atomic Energy Agency',
    id: 'international-atomic-energy-agency',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-atomic-energy-agency.csl',
  },
  {
    label: 'International Biodeterioration & Biodegradation',
    id: 'international-biodeterioration-and-biodegradation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-biodeterioration-and-biodegradation.csl',
  },
  {
    label: 'International Brazilian Journal Of Urology',
    id: 'international-brazilian-journal-of-urology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-brazilian-journal-of-urology.csl',
  },
  {
    label: 'International Conference on Information Systems Development',
    id: 'international-conference-on-information-systems-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-conference-on-information-systems-development.csl',
  },
  {
    label: 'International Development Policy',
    id: 'international-development-policy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-development-policy.csl',
  },
  {
    label:
      'International Energy Agency - Organisation for Economic Co-operation and Development',
    id: 'international-energy-agency-organisation-for-economic-co-operation-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-energy-agency-organisation-for-economic-co-operation-and-development.csl',
  },
  {
    label:
      'International Islamic University Malaysia - Ahmad Ibrahim Kulliyyah of Laws',
    id: 'international-islamic-university-malaysia-ahmad-ibrahim-kulliyyah-of-laws',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-islamic-university-malaysia-ahmad-ibrahim-kulliyyah-of-laws.csl',
  },
  {
    label:
      'International Journal for Numerical Methods in Biomedical Engineering',
    id: 'international-journal-for-numerical-methods-in-biomedical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-for-numerical-methods-in-biomedical-engineering.csl',
  },
  {
    label: 'International Journal of Audiology',
    id: 'international-journal-of-audiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-audiology.csl',
  },
  {
    label: 'International Journal of Automotive Technology',
    id: 'international-journal-of-automotive-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-automotive-technology.csl',
  },
  {
    label: 'International Journal of Cancer',
    id: 'international-journal-of-cancer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-cancer.csl',
  },
  {
    label: 'International Journal of Circuit Theory and Applications',
    id: 'international-journal-of-circuit-theory-and-applications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-circuit-theory-and-applications.csl',
  },
  {
    label: 'International Journal of Climatology',
    id: 'international-journal-of-climatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-climatology.csl',
  },
  {
    label: 'International Journal of Clinical Research',
    id: 'international-journal-of-clinical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-clinical-research.csl',
  },
  {
    label: 'International Journal of Cosmetic Science',
    id: 'international-journal-of-cosmetic-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-cosmetic-science.csl',
  },
  {
    label: 'International Journal of Electrochemical Science',
    id: 'international-journal-of-electrochemical-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-electrochemical-science.csl',
  },
  {
    label: 'International Journal of Electronic Commerce',
    id: 'international-journal-of-electronic-commerce',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-electronic-commerce.csl',
  },
  {
    label: 'International Journal of Epidemiology',
    id: 'international-journal-of-epidemiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-epidemiology.csl',
  },
  {
    label: 'International Journal of Exercise Science',
    id: 'international-journal-of-exercise-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-exercise-science.csl',
  },
  {
    label: 'International Journal of Food Science & Technology',
    id: 'international-journal-of-food-science-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-food-science-and-technology.csl',
  },
  {
    label: 'International Journal of Geriatric Psychiatry',
    id: 'international-journal-of-geriatric-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-geriatric-psychiatry.csl',
  },
  {
    label: 'International Journal of Humanoid Robotics',
    id: 'international-journal-of-humanoid-robotics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-humanoid-robotics.csl',
  },
  {
    label: 'International Journal of Language & Communication Disorders',
    id: 'international-journal-of-language-and-communication-disorders',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-language-and-communication-disorders.csl',
  },
  {
    label: 'International Journal of Learner Corpus Research',
    id: 'international-journal-of-learner-corpus-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-learner-corpus-research.csl',
  },
  {
    label: 'International Journal of Lexicography',
    id: 'international-journal-of-lexicography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-lexicography.csl',
  },
  {
    label: 'International Journal of Management Reviews',
    id: 'international-journal-of-management-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-management-reviews.csl',
  },
  {
    label: 'International Journal of Nuclear Security',
    id: 'international-journal-of-nuclear-security',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-nuclear-security.csl',
  },
  {
    label: 'International Journal of Obstetric Anesthesia',
    id: 'international-journal-of-obstetric-anesthesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-obstetric-anesthesia.csl',
  },
  {
    label:
      'International Journal of Occupational Medicine and Environmental Health',
    id: 'international-journal-of-occupational-medicine-and-environmental-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-occupational-medicine-and-environmental-health.csl',
  },
  {
    label: 'International Journal of Oral and Maxillofacial Surgery',
    id: 'international-journal-of-oral-and-maxillofacial-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-oral-and-maxillofacial-surgery.csl',
  },
  {
    label: 'International Journal of Osteoarchaeology',
    id: 'international-journal-of-osteoarchaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-osteoarchaeology.csl',
  },
  {
    label: 'International Journal of Plant Sciences',
    id: 'international-journal-of-plant-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-plant-sciences.csl',
  },
  {
    label: 'International Journal of Polymer Analysis and Characterization',
    id: 'international-journal-of-polymer-analysis-and-characterization',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-polymer-analysis-and-characterization.csl',
  },
  {
    label:
      'International Journal of Polymeric Materials and Polymeric Biomaterials',
    id: 'international-journal-of-polymeric-materials-and-polymeric-biomaterials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-polymeric-materials-and-polymeric-biomaterials.csl',
  },
  {
    label: 'International Journal of Population Data Science',
    id: 'international-journal-of-population-data-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-population-data-science.csl',
  },
  {
    label: 'International Journal of Quantum Chemistry',
    id: 'international-journal-of-quantum-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-quantum-chemistry.csl',
  },
  {
    label: 'International Journal of Radiation Oncology, Biology, Physics',
    id: 'international-journal-of-radiation-oncology-biology-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-radiation-oncology-biology-physics.csl',
  },
  {
    label: 'International Journal of Research in Exercise Physiology',
    id: 'international-journal-of-research-in-exercise-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-research-in-exercise-physiology.csl',
  },
  {
    label: 'International Journal of Simulation Modelling',
    id: 'international-journal-of-simulation-modelling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-simulation-modelling.csl',
  },
  {
    label: 'International Journal of Spatial Data Infrastructures Research',
    id: 'international-journal-of-spatial-data-infrastructures-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-spatial-data-infrastructures-research.csl',
  },
  {
    label: 'International Journal of Sport Medicine',
    id: 'international-journal-of-sports-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-sports-medicine.csl',
  },
  {
    label: 'International Journal of Urban and Regional Research',
    id: 'international-journal-of-urban-and-regional-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-urban-and-regional-research.csl',
  },
  {
    label: 'International Journal of Wildland Fire',
    id: 'international-journal-of-wildland-fire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-journal-of-wildland-fire.csl',
  },
  {
    label: 'International Microbiology',
    id: 'international-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-microbiology.csl',
  },
  {
    label: 'International Organization',
    id: 'international-organization',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-organization.csl',
  },
  {
    label: 'International Pig Veterinary Society Congress Proceedings',
    id: 'international-pig-veterinary-society-congress-proceedings',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-pig-veterinary-society-congress-proceedings.csl',
  },
  {
    label: 'International Review of the Red Cross',
    id: 'international-review-of-the-red-cross',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-review-of-the-red-cross.csl',
  },
  {
    label: 'International Security',
    id: 'international-security',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-security.csl',
  },
  {
    label: 'International Studies Association',
    id: 'international-studies-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-studies-association.csl',
  },
  {
    label: 'International Union of Crystallography journals',
    id: 'international-union-of-crystallography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-union-of-crystallography.csl',
  },
  {
    label:
      'International Union of Forest Research Organizations - Headquarters',
    id: 'international-union-of-forest-research-organizations-headquarters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/international-union-of-forest-research-organizations-headquarters.csl',
  },
  {
    label: 'Internet Archaeology',
    id: 'internet-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/internet-archaeology.csl',
  },
  {
    label: 'Interpreting',
    id: 'interpreting',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/interpreting.csl',
  },
  {
    label:
      'Inventaire général du patrimoine culturel - ISO-690 (full note, with Ibid., Français)',
    id: 'inventaire-general-du-patrimoine-culturel-iso-690-full-note-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inventaire-general-du-patrimoine-culturel-iso-690-full-note-with-ibid.csl',
  },
  {
    label:
      'Inventaire général du patrimoine culturel - ISO-690 (full note, Français)',
    id: 'inventaire-general-du-patrimoine-culturel-iso-690-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inventaire-general-du-patrimoine-culturel-iso-690-full-note.csl',
  },
  {
    label:
      'Inventaire général du patrimoine culturel - ISO-690 (note, Français)',
    id: 'inventaire-general-du-patrimoine-culturel-iso-690-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/inventaire-general-du-patrimoine-culturel-iso-690-note.csl',
  },
  {
    label: 'Invertebrate Biology',
    id: 'invertebrate-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/invertebrate-biology.csl',
  },
  {
    label: 'Investigative Radiology',
    id: 'investigative-radiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/investigative-radiology.csl',
  },
  {
    label: 'InVisu',
    id: 'invisu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/invisu.csl',
  },
  {
    label: 'IOS Press (books)',
    id: 'ios-press-books',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ios-press-books.csl',
  },
  {
    label: 'IPAG Business School - APA',
    id: 'ipag-business-school-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ipag-business-school-apa.csl',
  },
  {
    label: 'Iran Manual of Style - شیوه‌نامه ایران (فارسی)',
    id: 'iran-manual-of-style',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iran-manual-of-style.csl',
  },
  {
    label: 'Iranian Journal of Basic Medical Sciences',
    id: 'iranian-journal-of-basic-medical-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iranian-journal-of-basic-medical-sciences.csl',
  },
  {
    label: 'Iranian Journal of Pharmaceutical Research',
    id: 'iranian-journal-of-pharmaceutical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iranian-journal-of-pharmaceutical-research.csl',
  },
  {
    label: 'Irish Historical Studies',
    id: 'irish-historical-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/irish-historical-studies.csl',
  },
  {
    label: 'Isabella Stewart Gardner Museum',
    id: 'isabella-stewart-gardner-museum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/isabella-stewart-gardner-museum.csl',
  },
  {
    label: 'Isara - ISO-690 (auteur-date, français)',
    id: 'isara-iso-690',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/isara-iso-690.csl',
  },
  {
    label: 'İSNAD Atıf Sistemi 2. Edisyon (dipnotlu)',
    id: 'isnad-dipnotlu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/isnad-dipnotlu.csl',
  },
  {
    label: 'İSNAD Atıf Sistemi 2. Edisyon (metiniçi)',
    id: 'isnad-metinici',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/isnad-metinici.csl',
  },
  {
    label: 'İSNAD Atıf Sistemi 1. Edisyon (dipnotlu)',
    id: 'isnad',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/isnad.csl',
  },
  {
    label: 'ISO-690 (author-date, Čeština)',
    id: 'iso690-author-date-cs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-cs.csl',
  },
  {
    label: 'ISO-690 (author-date, Deutsch)',
    id: 'iso690-author-date-de',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-de.csl',
  },
  {
    label: 'ISO-690 (author-date, English)',
    id: 'iso690-author-date-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-en.csl',
  },
  {
    label: 'ISO-690 (author-date, Español)',
    id: 'iso690-author-date-es',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-es.csl',
  },
  {
    label: 'ISO-690 (author-date, no abstract, Français)',
    id: 'iso690-author-date-fr-no-abstract',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-fr-no-abstract.csl',
  },
  {
    label: 'ISO-690 (author-date, Français)',
    id: 'iso690-author-date-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-fr.csl',
  },
  {
    label: 'ISO-690 (author-date, Português - Brasil)',
    id: 'iso690-author-date-pt-br',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-pt-br.csl',
  },
  {
    label: 'ISO-690 (author-date, Slovenčina)',
    id: 'iso690-author-date-sk',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-author-date-sk.csl',
  },
  {
    label: 'ISO-690 (full note, Čeština)',
    id: 'iso690-full-note-cs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-full-note-cs.csl',
  },
  {
    label: 'ISO-690 (full note, Slovenčina)',
    id: 'iso690-full-note-sk',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-full-note-sk.csl',
  },
  {
    label: 'ISO-690 (full note, with Ibid., Română)',
    id: 'iso690-full-note-with-ibid-ro',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-full-note-with-ibid-ro.csl',
  },
  {
    label: 'ISO-690 (note, without bibliography, Čeština)',
    id: 'iso690-note-cs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-note-cs.csl',
  },
  {
    label: 'ISO-690 (note, no abstract, Français)',
    id: 'iso690-note-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-note-fr.csl',
  },
  {
    label: 'ISO-690 (numeric, brackets, Čeština)',
    id: 'iso690-numeric-brackets-cs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-brackets-cs.csl',
  },
  {
    label: 'ISO-690 (numeric, parentheses, Čeština)',
    id: 'iso690-numeric-cs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-cs.csl',
  },
  {
    label: 'ISO-690 (numeric, English)',
    id: 'iso690-numeric-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-en.csl',
  },
  {
    label: 'ISO-690 (numeric, Français)',
    id: 'iso690-numeric-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-fr.csl',
  },
  {
    label: 'ISO-690 (numeric, Lietuvių kalba)',
    id: 'iso690-numeric-lt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-lt.csl',
  },
  {
    label: 'ISO-690 (numeric, Slovenčina)',
    id: 'iso690-numeric-sk',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iso690-numeric-sk.csl',
  },
  {
    label: 'Israel Medical Association Journal',
    id: 'israel-medical-association-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/israel-medical-association-journal.csl',
  },
  {
    label: 'İstanbul Medical Journal',
    id: 'istanbul-medical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/istanbul-medical-journal.csl',
  },
  {
    label: 'İstanbul Üniversitesi Sosyal Bilimler Enstitüsü (Türkçe)',
    id: 'istanbul-universitesi-sosyal-bilimler-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/istanbul-universitesi-sosyal-bilimler-enstitusu.csl',
  },
  {
    label: 'Italian Journal of Agronomy',
    id: 'italian-journal-of-agronomy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/italian-journal-of-agronomy.csl',
  },
  {
    label: 'Italus Hortus',
    id: 'italus-hortus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/italus-hortus.csl',
  },
  {
    label: 'Ithaque (Français - Canada)',
    id: 'ithaque',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ithaque.csl',
  },
  {
    label: 'IUBMB Life',
    id: 'iubmb-life',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/iubmb-life.csl',
  },
  {
    label: 'Ius Ecclesiae',
    id: 'ius-ecclesiae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ius-ecclesiae.csl',
  },
  {
    label:
      'İzmir Katip Çelebi Üniversitesi - Sosyal Bilimler Enstitüsü (Türkçe)',
    id: 'izmir-katip-celebi-universitesi-sosyal-bilimler-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/izmir-katip-celebi-universitesi-sosyal-bilimler-enstitusu.csl',
  },
  {
    label: 'JACC: Cardiovascular Imaging',
    id: 'jacc-cardiovascular-imaging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jacc-cardiovascular-imaging.csl',
  },
  {
    label: 'JACC: Cardiovascular Interventions',
    id: 'jacc-cardiovascular-interventions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jacc-cardiovascular-interventions.csl',
  },
  {
    label: 'Jahrbuch der Österreichischen Byzantinischen Gesellschaft',
    id: 'jahrbuch-der-osterreichischen-byzantinischen-gesellschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jahrbuch-der-osterreichischen-byzantinischen-gesellschaft.csl',
  },
  {
    label: 'Jahrbuch für evangelikale Theologie (Deutsch)',
    id: 'jahrbuch-fur-evangelikale-theologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jahrbuch-fur-evangelikale-theologie.csl',
  },
  {
    label: 'Japanese Journal of Applied Physics',
    id: 'japanese-journal-of-applied-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/japanese-journal-of-applied-physics.csl',
  },
  {
    label: 'Javnost - The Public',
    id: 'javnost-the-public',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/javnost-the-public.csl',
  },
  {
    label: 'JCI Insight',
    id: 'jci-insight',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jci-insight.csl',
  },
  {
    label: 'JCOM: Journal of Science Communication',
    id: 'jcom-journal-of-science-communication',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jcom-journal-of-science-communication.csl',
  },
  {
    label:
      'John Benjamins Publishing Company - Iconicity in Language and Literature',
    id: 'john-benjamins-publishing-company-iconicity-in-language-and-literature',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/john-benjamins-publishing-company-iconicity-in-language-and-literature.csl',
  },
  {
    label:
      'John Benjamins Publishing Company - Linguistik Aktuell/Linguistics Today',
    id: 'john-benjamins-publishing-company-linguistik-aktuell-linguistics-today',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/john-benjamins-publishing-company-linguistik-aktuell-linguistics-today.csl',
  },
  {
    label: 'Johnson Matthey Technology Review',
    id: 'johnson-matthey-technology-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/johnson-matthey-technology-review.csl',
  },
  {
    label: 'Journal and Proceedings of the Royal Society of New South Wales',
    id: 'journal-and-proceedings-of-the-royal-society-of-new-south-wales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-and-proceedings-of-the-royal-society-of-new-south-wales.csl',
  },
  {
    label: 'Journal de la Société des américanistes',
    id: 'journal-de-la-societe-des-americanistes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-de-la-societe-des-americanistes.csl',
  },
  {
    label: 'Journal de la Société des Océanistes',
    id: 'journal-de-la-societe-des-oceanistes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-de-la-societe-des-oceanistes.csl',
  },
  {
    label: 'Journal for the History of Astronomy',
    id: 'journal-for-the-history-of-astronomy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-for-the-history-of-astronomy.csl',
  },
  {
    label: 'Journal for the Study of the New Testament',
    id: 'journal-for-the-study-of-the-new-testament',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-for-the-study-of-the-new-testament.csl',
  },
  {
    label: 'Journal for Veterinary Medicine, Biotechnology and Biosafety',
    id: 'journal-for-veterinary-medicine-biotechnology-and-biosafety',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-for-veterinary-medicine-biotechnology-and-biosafety.csl',
  },
  {
    label: 'Journal für Kulturpflanzen - Journal of Cultivated Plants',
    id: 'journal-fur-kulturpflanzen-journal-of-cultivated-plants',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-fur-kulturpflanzen-journal-of-cultivated-plants.csl',
  },
  {
    label: 'Journal für Kunstgeschichte',
    id: 'journal-fur-kunstgeschichte',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-fur-kunstgeschichte.csl',
  },
  {
    label: 'Journal für Medienlinguistik (Deutsch)',
    id: 'journal-fur-medienlinguistik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-fur-medienlinguistik.csl',
  },
  {
    label: 'Journal of Accounting Research',
    id: 'journal-of-accounting-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-accounting-research.csl',
  },
  {
    label: 'Journal of Acoustics',
    id: 'journal-of-acoustics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-acoustics.csl',
  },
  {
    label: 'Journal of Adolescent Health',
    id: 'journal-of-adolescent-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-adolescent-health.csl',
  },
  {
    label: 'Journal of Advertising Research',
    id: 'journal-of-advertising-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-advertising-research.csl',
  },
  {
    label: 'Journal of Agricultural and Applied Economics',
    id: 'journal-of-agricultural-and-applied-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-agricultural-and-applied-economics.csl',
  },
  {
    label: 'Journal of Agricultural and Resource Economics',
    id: 'journal-of-agricultural-and-resource-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-agricultural-and-resource-economics.csl',
  },
  {
    label: "Journal of Alzheimer's Disease",
    id: 'journal-of-alzheimers-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-alzheimers-disease.csl',
  },
  {
    label: 'Journal of Analytical Toxicology',
    id: 'journal-of-analytical-toxicology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-analytical-toxicology.csl',
  },
  {
    label: 'Journal of Animal Physiology and Animal Nutrition',
    id: 'journal-of-animal-physiology-and-animal-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-animal-physiology-and-animal-nutrition.csl',
  },
  {
    label: 'Journal of Animal Science',
    id: 'journal-of-animal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-animal-science.csl',
  },
  {
    label: 'Journal of Antimicrobial Chemotherapy',
    id: 'journal-of-antimicrobial-chemotherapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-antimicrobial-chemotherapy.csl',
  },
  {
    label: 'Journal of AOAC International',
    id: 'journal-of-aoac-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-aoac-international.csl',
  },
  {
    label: 'Journal of Applied Animal Science',
    id: 'journal-of-applied-animal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-animal-science.csl',
  },
  {
    label: 'Journal of Applied Clinical Medical Physics',
    id: 'journal-of-applied-clinical-medical-physics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-clinical-medical-physics.csl',
  },
  {
    label: 'Journal of Applied Entomology',
    id: 'journal-of-applied-entomology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-entomology.csl',
  },
  {
    label: 'Journal of Applied Pharmaceutical Research',
    id: 'journal-of-applied-pharmaceutical-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-pharmaceutical-research.csl',
  },
  {
    label: 'Journal of Applied Philosophy',
    id: 'journal-of-applied-philosophy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-philosophy.csl',
  },
  {
    label: 'Journal of Applied Polymer Science',
    id: 'journal-of-applied-polymer-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-applied-polymer-science.csl',
  },
  {
    label: 'Journal of Archaeological Research',
    id: 'journal-of-archaeological-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-archaeological-research.csl',
  },
  {
    label: 'Journal of Atrial Fibrillation',
    id: 'journal-of-atrial-fibrillation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-atrial-fibrillation.csl',
  },
  {
    label: 'Journal of Australian Strength & Conditioning',
    id: 'journal-of-australian-strength-and-conditioning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-australian-strength-and-conditioning.csl',
  },
  {
    label: 'Journal of Avian Biology',
    id: 'journal-of-avian-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-avian-biology.csl',
  },
  {
    label: 'Journal of Basic Microbiology',
    id: 'journal-of-basic-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-basic-microbiology.csl',
  },
  {
    label: 'The Journal of Biological Chemistry',
    id: 'journal-of-biological-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-biological-chemistry.csl',
  },
  {
    label: 'Journal of Biological Regulators & Homeostatic Agents',
    id: 'journal-of-biological-regulators-and-homeostatic-agents',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-biological-regulators-and-homeostatic-agents.csl',
  },
  {
    label: 'Journal of Biomedical Materials Research Part A',
    id: 'journal-of-biomedical-materials-research-part-a',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-biomedical-materials-research-part-a.csl',
  },
  {
    label: 'Journal of Biosciences',
    id: 'journal-of-biosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-biosciences.csl',
  },
  {
    label: 'Journal of Bone and Mineral Research',
    id: 'journal-of-bone-and-mineral-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-bone-and-mineral-research.csl',
  },
  {
    label: 'Journal of Brachial Plexus and Peripheral Nerve Injury',
    id: 'journal-of-brachial-plexus-and-peripheral-nerve-injury',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-brachial-plexus-and-peripheral-nerve-injury.csl',
  },
  {
    label: 'Journal of Breast Cancer',
    id: 'journal-of-breast-cancer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-breast-cancer.csl',
  },
  {
    label: 'Journal of Burn Care & Research',
    id: 'journal-of-burn-care-and-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-burn-care-and-research.csl',
  },
  {
    label: 'Journal of Business Logistics',
    id: 'journal-of-business-logistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-business-logistics.csl',
  },
  {
    label: 'Journal of Cachexia, Sarcopenia and Muscle',
    id: 'journal-of-cachexia-sarcopenia-and-muscle',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-cachexia-sarcopenia-and-muscle.csl',
  },
  {
    label: 'Journal of Cardiothoracic and Vascular Anesthesia',
    id: 'journal-of-cardiothoracic-and-vascular-anesthesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-cardiothoracic-and-vascular-anesthesia.csl',
  },
  {
    label: 'Journal of Cellular and Molecular Medicine',
    id: 'journal-of-cellular-and-molecular-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-cellular-and-molecular-medicine.csl',
  },
  {
    label: 'Journal of Cellular Biochemistry',
    id: 'journal-of-cellular-biochemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-cellular-biochemistry.csl',
  },
  {
    label: 'Journal of Chemistry and Chemical Engineering',
    id: 'journal-of-chemistry-and-chemical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-chemistry-and-chemical-engineering.csl',
  },
  {
    label: 'Journal of Chemometrics',
    id: 'journal-of-chemometrics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-chemometrics.csl',
  },
  {
    label: 'Journal of Clinical and Translational Science',
    id: 'journal-of-clinical-and-translational-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-and-translational-science.csl',
  },
  {
    label: 'Journal of Clinical Neurology',
    id: 'journal-of-clinical-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-neurology.csl',
  },
  {
    label: 'Journal of Clinical Neurophysiology',
    id: 'journal-of-clinical-neurophysiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-neurophysiology.csl',
  },
  {
    label: 'Journal of Clinical Oncology',
    id: 'journal-of-clinical-oncology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-oncology.csl',
  },
  {
    label: 'Journal of Clinical Rheumatology',
    id: 'journal-of-clinical-rheumatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-rheumatology.csl',
  },
  {
    label: 'Journal of Clinical Sleep Medicine',
    id: 'journal-of-clinical-sleep-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-clinical-sleep-medicine.csl',
  },
  {
    label: 'Journal of Combinatorics',
    id: 'journal-of-combinatorics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-combinatorics.csl',
  },
  {
    label: 'Journal of Common Market Studies',
    id: 'journal-of-common-market-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-common-market-studies.csl',
  },
  {
    label: 'Journal of Comparative Pathology',
    id: 'journal-of-comparative-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-comparative-pathology.csl',
  },
  {
    label: 'Journal of Computational Chemistry',
    id: 'journal-of-computational-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-computational-chemistry.csl',
  },
  {
    label: 'Journal of Computer Applications in Archaeology',
    id: 'journal-of-computer-applications-in-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-computer-applications-in-archaeology.csl',
  },
  {
    label: 'Journal of Computer Assisted Tomography',
    id: 'journal-of-computer-assisted-tomography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-computer-assisted-tomography.csl',
  },
  {
    label: 'Journal of Computer Information Systems',
    id: 'journal-of-computer-information-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-computer-information-systems.csl',
  },
  {
    label: 'Journal of Consumer Research',
    id: 'journal-of-consumer-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-consumer-research.csl',
  },
  {
    label: 'Journal of Contemporary Medicine',
    id: 'journal-of-contemporary-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-contemporary-medicine.csl',
  },
  {
    label: 'Journal of Contemporary Water Research and Education',
    id: 'journal-of-contemporary-water-research-and-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-contemporary-water-research-and-education.csl',
  },
  {
    label: "Journal of Crohn's and Colitis Supplements",
    id: 'journal-of-crohns-and-colitis-supplements',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-crohns-and-colitis-supplements.csl',
  },
  {
    label: "Journal of Crohn's and Colitis",
    id: 'journal-of-crohns-and-colitis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-crohns-and-colitis.csl',
  },
  {
    label: 'Journal of Dairy Research',
    id: 'journal-of-dairy-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-dairy-research.csl',
  },
  {
    label: 'Journal of Dairy Science',
    id: 'journal-of-dairy-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-dairy-science.csl',
  },
  {
    label: 'Journal of Dental Research',
    id: 'journal-of-dental-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-dental-research.csl',
  },
  {
    label: 'Journal of Dental Traumatology',
    id: 'journal-of-dental-traumatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-dental-traumatology.csl',
  },
  {
    label: 'Journal of Early Christian Studies',
    id: 'journal-of-early-christian-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-early-christian-studies.csl',
  },
  {
    label: 'Journal of Economic Impact',
    id: 'journal-of-economic-impact',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-economic-impact.csl',
  },
  {
    label: 'Journal of Egyptian History',
    id: 'journal-of-egyptian-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-egyptian-history.csl',
  },
  {
    label: 'Journal of Elections, Public Opinion & Parties',
    id: 'journal-of-elections-public-opinion-and-parties',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-elections-public-opinion-and-parties.csl',
  },
  {
    label: 'Journal of Endodontics',
    id: 'journal-of-endodontics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-endodontics.csl',
  },
  {
    label: 'Journal of Environmental Science and Health, Part B',
    id: 'journal-of-environmental-science-and-health-part-b',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-environmental-science-and-health-part-b.csl',
  },
  {
    label: 'Journal of Ethnobiology',
    id: 'journal-of-ethnobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-ethnobiology.csl',
  },
  {
    label: 'Journal of European Public Policy',
    id: 'journal-of-european-public-policy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-european-public-policy.csl',
  },
  {
    label: 'Journal of Evolution and Health',
    id: 'journal-of-evolution-and-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-evolution-and-health.csl',
  },
  {
    label: 'Journal of Evolutionary Biology',
    id: 'journal-of-evolutionary-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-evolutionary-biology.csl',
  },
  {
    label: 'Journal of Experimental Botany',
    id: 'journal-of-experimental-botany',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-experimental-botany.csl',
  },
  {
    label: 'Journal of Field Ornithology',
    id: 'journal-of-field-ornithology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-field-ornithology.csl',
  },
  {
    label: 'Journal of Finance',
    id: 'journal-of-finance',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-finance.csl',
  },
  {
    label: 'Journal of Financial and Quantitative Analysis',
    id: 'journal-of-financial-and-quantitative-analysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-financial-and-quantitative-analysis.csl',
  },
  {
    label: 'Journal of Fish Biology',
    id: 'journal-of-fish-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-fish-biology.csl',
  },
  {
    label: 'Journal of Food Protection',
    id: 'journal-of-food-protection',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-food-protection.csl',
  },
  {
    label: 'Journal of Foraminiferal Research',
    id: 'journal-of-foraminiferal-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-foraminiferal-research.csl',
  },
  {
    label: 'Journal of Forensic Sciences',
    id: 'journal-of-forensic-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-forensic-sciences.csl',
  },
  {
    label: 'Journal of Frailty & Aging',
    id: 'journal-of-frailty-and-aging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-frailty-and-aging.csl',
  },
  {
    label: 'Journal of Geriatric Psychiatry and Neurology',
    id: 'journal-of-geriatric-psychiatry-and-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-geriatric-psychiatry-and-neurology.csl',
  },
  {
    label: 'Journal of Glaciology',
    id: 'journal-of-glaciology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-glaciology.csl',
  },
  {
    label: 'Journal of Global Health',
    id: 'journal-of-global-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-global-health.csl',
  },
  {
    label: 'Journal of Health Care for the Poor and Underserved',
    id: 'journal-of-health-care-for-the-poor-and-underserved',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-health-care-for-the-poor-and-underserved.csl',
  },
  {
    label: 'Journal of Hearing Science',
    id: 'journal-of-hearing-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-hearing-science.csl',
  },
  {
    label: 'Journal of Historical Linguistics',
    id: 'journal-of-historical-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-historical-linguistics.csl',
  },
  {
    label: 'Journal of Human Evolution',
    id: 'journal-of-human-evolution',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-human-evolution.csl',
  },
  {
    label: 'Journal of Human Nutrition and Dietetics',
    id: 'journal-of-human-nutrition-and-dietetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-human-nutrition-and-dietetics.csl',
  },
  {
    label: 'Journal of Human Rights',
    id: 'journal-of-human-rights',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-human-rights.csl',
  },
  {
    label: 'Journal of Hypertension',
    id: 'journal-of-hypertension',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-hypertension.csl',
  },
  {
    label: 'Journal of Industrial and Engineering Chemistry',
    id: 'journal-of-industrial-and-engineering-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-industrial-and-engineering-chemistry.csl',
  },
  {
    label: 'Journal of Industrial Ecology',
    id: 'journal-of-industrial-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-industrial-ecology.csl',
  },
  {
    label: 'Journal of Infection',
    id: 'journal-of-infection',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-infection.csl',
  },
  {
    label: 'Journal of Infectious Diseases',
    id: 'journal-of-infectious-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-infectious-diseases.csl',
  },
  {
    label: 'Journal of Information Technology',
    id: 'journal-of-information-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-information-technology.csl',
  },
  {
    label: 'Journal of Institutional and Theoretical Economics',
    id: 'journal-of-institutional-and-theoretical-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-institutional-and-theoretical-economics.csl',
  },
  {
    label: 'Journal of Instrumentation',
    id: 'journal-of-instrumentation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-instrumentation.csl',
  },
  {
    label: 'Journal of Integrated OMICS',
    id: 'journal-of-integrated-omics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-integrated-omics.csl',
  },
  {
    label: 'Journal of Interactive Marketing',
    id: 'journal-of-interactive-marketing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-interactive-marketing.csl',
  },
  {
    label: 'Journal of Intercultural Studies',
    id: 'journal-of-intercultural-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-intercultural-studies.csl',
  },
  {
    label: 'Journal of Internal Medicine',
    id: 'journal-of-internal-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-internal-medicine.csl',
  },
  {
    label: 'Journal of International Business Studies',
    id: 'journal-of-international-business-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-international-business-studies.csl',
  },
  {
    label: 'Journal of International Economic Law',
    id: 'journal-of-international-economic-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-international-economic-law.csl',
  },
  {
    label: 'Journal of International Peacekeeping',
    id: 'journal-of-international-peacekeeping',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-international-peacekeeping.csl',
  },
  {
    label: 'Journal of International Relations and Development',
    id: 'journal-of-international-relations-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-international-relations-and-development.csl',
  },
  {
    label: 'Journal of Investigative Dermatology',
    id: 'journal-of-investigative-dermatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-investigative-dermatology.csl',
  },
  {
    label: 'Journal of Jewish Studies',
    id: 'journal-of-jewish-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-jewish-studies.csl',
  },
  {
    label: 'Journal of Korean Neurosurgical Society',
    id: 'journal-of-korean-neurosurgical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-korean-neurosurgical-society.csl',
  },
  {
    label: 'Journal of Law, Medicine & Ethics',
    id: 'journal-of-law-medicine-ethics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-law-medicine-ethics.csl',
  },
  {
    label: 'Journal of Leukocyte Biology',
    id: 'journal-of-leukocyte-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-leukocyte-biology.csl',
  },
  {
    label: 'Journal of Limnology',
    id: 'journal-of-limnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-limnology.csl',
  },
  {
    label: 'Journal of Linguistics',
    id: 'journal-of-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-linguistics.csl',
  },
  {
    label: 'Journal of Lipid Research',
    id: 'journal-of-lipid-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-lipid-research.csl',
  },
  {
    label: 'Journal of Lithic Studies',
    id: 'journal-of-lithic-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-lithic-studies.csl',
  },
  {
    label: 'Journal Of Magnetic Resonance Imaging',
    id: 'journal-of-magnetic-resonance-imaging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-magnetic-resonance-imaging.csl',
  },
  {
    label: 'Journal of Mammalogy',
    id: 'journal-of-mammalogy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-mammalogy.csl',
  },
  {
    label: 'Journal of Management Information Systems',
    id: 'journal-of-management-information-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-management-information-systems.csl',
  },
  {
    label: 'Journal of Management Studies',
    id: 'journal-of-management-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-management-studies.csl',
  },
  {
    label: 'Journal of Management',
    id: 'journal-of-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-management.csl',
  },
  {
    label: 'Journal of Materials Research',
    id: 'journal-of-materials-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-materials-research.csl',
  },
  {
    label: 'Journal of Mechanical Science and Technology',
    id: 'journal-of-mechanical-science-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-mechanical-science-and-technology.csl',
  },
  {
    label: 'Journal of Medical Genetics',
    id: 'journal-of-medical-genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-medical-genetics.csl',
  },
  {
    label: 'Journal of Medical Internet Research',
    id: 'journal-of-medical-internet-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-medical-internet-research.csl',
  },
  {
    label: 'Journal of Microbiology and Biotechnology',
    id: 'journal-of-microbiology-and-biotechnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-microbiology-and-biotechnology.csl',
  },
  {
    label: 'Journal of Microbiology',
    id: 'journal-of-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-microbiology.csl',
  },
  {
    label: 'Journal of Midwifery Science',
    id: 'journal-of-midwifery-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-midwifery-science.csl',
  },
  {
    label: 'Journal of Minimally Invasive Gynecology',
    id: 'journal-of-minimally-invasive-gynecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-minimally-invasive-gynecology.csl',
  },
  {
    label: 'Journal of Molecular Cell Biology',
    id: 'journal-of-molecular-cell-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-molecular-cell-biology.csl',
  },
  {
    label: 'Journal of Molecular Endocrinology',
    id: 'journal-of-molecular-endocrinology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-molecular-endocrinology.csl',
  },
  {
    label: 'Journal of Molecular Recognition',
    id: 'journal-of-molecular-recognition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-molecular-recognition.csl',
  },
  {
    label: 'Journal of Molecular Signaling',
    id: 'journal-of-molecular-signaling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-molecular-signaling.csl',
  },
  {
    label: 'Journal of Move and Therapeutic Science',
    id: 'journal-of-move-and-therapeutic-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-move-and-therapeutic-science.csl',
  },
  {
    label: 'Journal of Musculoskeletal Research',
    id: 'journal-of-musculoskeletal-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-musculoskeletal-research.csl',
  },
  {
    label: 'Journal of Music Technology and Education',
    id: 'journal-of-music-technology-and-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-music-technology-and-education.csl',
  },
  {
    label: 'Journal of Nanoscience and Nanotechnology',
    id: 'journal-of-nanoscience-and-nanotechnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-nanoscience-and-nanotechnology.csl',
  },
  {
    label: 'Journal of Natural History',
    id: 'journal-of-natural-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-natural-history.csl',
  },
  {
    label: 'Journal of Neolithic Archaeology',
    id: 'journal-of-neolithic-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neolithic-archaeology.csl',
  },
  {
    label: 'Journal of Neurochemistry',
    id: 'journal-of-neurochemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neurochemistry.csl',
  },
  {
    label: 'Journal of Neuroendocrinology',
    id: 'journal-of-neuroendocrinology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neuroendocrinology.csl',
  },
  {
    label: 'Journal of Neuroimaging',
    id: 'journal-of-neuroimaging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neuroimaging.csl',
  },
  {
    label: 'Journal of Neurological Disorders',
    id: 'journal-of-neurological-disorders',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neurological-disorders.csl',
  },
  {
    label: 'Journal of Neurophysiology',
    id: 'journal-of-neurophysiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neurophysiology.csl',
  },
  {
    label: 'Journal of Neuroscience and Neuroengineering',
    id: 'journal-of-neuroscience-and-neuroengineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-neuroscience-and-neuroengineering.csl',
  },
  {
    label: 'Journal of New Zealand Grasslands',
    id: 'journal-of-new-zealand-grasslands',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-new-zealand-grasslands.csl',
  },
  {
    label: 'Journal of Nutrition',
    id: 'journal-of-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-nutrition.csl',
  },
  {
    label: 'Journal of Occupational and Environmental Medicine',
    id: 'journal-of-occupational-and-environmental-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-occupational-and-environmental-medicine.csl',
  },
  {
    label: 'Journal of Oil Palm Research',
    id: 'journal-of-oil-palm-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-oil-palm-research.csl',
  },
  {
    label: 'Journal of Open Research Software',
    id: 'journal-of-open-research-software',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-open-research-software.csl',
  },
  {
    label: 'Journal of Oral and Maxillofacial Surgery',
    id: 'journal-of-oral-and-maxillofacial-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-oral-and-maxillofacial-surgery.csl',
  },
  {
    label: 'Journal of Orthopaedic Research',
    id: 'journal-of-orthopaedic-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-orthopaedic-research.csl',
  },
  {
    label: 'Journal of Orthopaedic Trauma',
    id: 'journal-of-orthopaedic-trauma',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-orthopaedic-trauma.csl',
  },
  {
    label: 'Journal of Orthopaedics, Trauma and Rehabilitation',
    id: 'journal-of-orthopaedics-trauma-and-rehabilitation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-orthopaedics-trauma-and-rehabilitation.csl',
  },
  {
    label: 'Journal of Paleontology',
    id: 'journal-of-paleontology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-paleontology.csl',
  },
  {
    label: 'Journal of Peace Research',
    id: 'journal-of-peace-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-peace-research.csl',
  },
  {
    label: 'Journal of Pediatric Gastroenterology and Nutrition',
    id: 'journal-of-pediatric-gastroenterology-and-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-pediatric-gastroenterology-and-nutrition.csl',
  },
  {
    label: 'Journal of Peptide Science',
    id: 'journal-of-peptide-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-peptide-science.csl',
  },
  {
    label: 'Journal of Perinatal Medicine',
    id: 'journal-of-perinatal-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-perinatal-medicine.csl',
  },
  {
    label: 'Journal of Periodontal Research',
    id: 'journal-of-periodontal-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-periodontal-research.csl',
  },
  {
    label: 'Journal of Petrology',
    id: 'journal-of-petrology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-petrology.csl',
  },
  {
    label: 'Journal of Pharmacy and Pharmacology',
    id: 'journal-of-pharmacy-and-pharmacology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-pharmacy-and-pharmacology.csl',
  },
  {
    label: 'Journal of Phycology',
    id: 'journal-of-phycology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-phycology.csl',
  },
  {
    label: 'Journal of Physical Therapy Science',
    id: 'journal-of-physical-therapy-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-physical-therapy-science.csl',
  },
  {
    label: 'Journal of Plankton Research',
    id: 'journal-of-plankton-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-plankton-research.csl',
  },
  {
    label: 'Journal of Plant Ecology',
    id: 'journal-of-plant-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-plant-ecology.csl',
  },
  {
    label: 'Journal of Plant Nutrition and Soil Science',
    id: 'journal-of-plant-nutrition-and-soil-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-plant-nutrition-and-soil-science.csl',
  },
  {
    label: 'Journal of Plant Protection Research',
    id: 'journal-of-plant-protection-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-plant-protection-research.csl',
  },
  {
    label: 'Journal of Political Ideologies',
    id: 'journal-of-political-ideologies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-political-ideologies.csl',
  },
  {
    label: 'Journal of Political Philosophy',
    id: 'journal-of-political-philosophy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-political-philosophy.csl',
  },
  {
    label: 'Journal of Pollination Ecology',
    id: 'journal-of-pollination-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-pollination-ecology.csl',
  },
  {
    label: 'Journal of Polymer Science Part A: Polymer Chemistry',
    id: 'journal-of-polymer-science-part-a-polymer-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-polymer-science-part-a-polymer-chemistry.csl',
  },
  {
    label: 'Journal of Porphyrins and Phthalocyanines',
    id: 'journal-of-porphyrins-and-phthalocyanines',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-porphyrins-and-phthalocyanines.csl',
  },
  {
    label: 'Journal of Product Innovation Management',
    id: 'journal-of-product-innovation-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-product-innovation-management.csl',
  },
  {
    label: 'Journal of Prosthodontics',
    id: 'journal-of-prosthodontics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-prosthodontics.csl',
  },
  {
    label: 'Journal of Psychiatric and Mental Health Nursing',
    id: 'journal-of-psychiatric-and-mental-health-nursing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-psychiatric-and-mental-health-nursing.csl',
  },
  {
    label: 'Journal of Psychiatry & Neuroscience',
    id: 'journal-of-psychiatry-and-neuroscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-psychiatry-and-neuroscience.csl',
  },
  {
    label: 'Journal of Raman Spectroscopy',
    id: 'journal-of-raman-spectroscopy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-raman-spectroscopy.csl',
  },
  {
    label: 'Journal of Reconstructive Microsurgery',
    id: 'journal-of-reconstructive-microsurgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-reconstructive-microsurgery.csl',
  },
  {
    label: 'Journal of Refugee Studies',
    id: 'journal-of-refugee-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-refugee-studies.csl',
  },
  {
    label: 'Journal of Retailing',
    id: 'journal-of-retailing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-retailing.csl',
  },
  {
    label: 'Journal of Rheumatology',
    id: 'journal-of-rheumatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-rheumatology.csl',
  },
  {
    label: 'Journal of Roman Archaeology (A)',
    id: 'journal-of-roman-archaeology-a',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-roman-archaeology-a.csl',
  },
  {
    label: 'Journal of Roman Archaeology (B)',
    id: 'journal-of-roman-archaeology-b',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-roman-archaeology-b.csl',
  },
  {
    label: 'Journal of Science and Medicine in Sport',
    id: 'journal-of-science-and-medicine-in-sport',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-science-and-medicine-in-sport.csl',
  },
  {
    label: 'Journal of Separation Science',
    id: 'journal-of-separation-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-separation-science.csl',
  },
  {
    label: 'Journal of Shoulder and Elbow Surgery',
    id: 'journal-of-shoulder-and-elbow-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-shoulder-and-elbow-surgery.csl',
  },
  {
    label: 'Journal of Simulation',
    id: 'journal-of-simulation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-simulation.csl',
  },
  {
    label: 'Journal of Sleep Research',
    id: 'journal-of-sleep-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-sleep-research.csl',
  },
  {
    label: 'Journal of Small Animal Practice',
    id: 'journal-of-small-animal-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-small-animal-practice.csl',
  },
  {
    label: 'Journal of Small Business Management',
    id: 'journal-of-small-business-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-small-business-management.csl',
  },
  {
    label: 'Journal of Social Archaeology',
    id: 'journal-of-social-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-social-archaeology.csl',
  },
  {
    label: 'Journal of Social Philosophy',
    id: 'journal-of-social-philosophy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-social-philosophy.csl',
  },
  {
    label: 'Journal of Soil and Water Conservation',
    id: 'journal-of-soil-and-water-conservation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-soil-and-water-conservation.csl',
  },
  {
    label: 'Journal of Soil Science and Plant Nutrition',
    id: 'journal-of-soil-science-and-plant-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-soil-science-and-plant-nutrition.csl',
  },
  {
    label: 'Journal of Sport and Health Science',
    id: 'journal-of-sport-and-health-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-sport-and-health-science.csl',
  },
  {
    label: 'Journal of Sports Science & Medicine',
    id: 'journal-of-sports-science-and-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-sports-science-and-medicine.csl',
  },
  {
    label: 'Journal of Strength and Conditioning Research',
    id: 'journal-of-strength-and-conditioning-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-strength-and-conditioning-research.csl',
  },
  {
    label: 'Journal of Stroke',
    id: 'journal-of-stroke',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-stroke.csl',
  },
  {
    label: 'Journal of Structural Geology',
    id: 'journal-of-structural-geology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-structural-geology.csl',
  },
  {
    label: 'Journal of Studies on Alcohol and Drugs',
    id: 'journal-of-studies-on-alcohol-and-drugs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-studies-on-alcohol-and-drugs.csl',
  },
  {
    label: 'Journal of Surgery and Medicine',
    id: 'journal-of-surgery-and-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-surgery-and-medicine.csl',
  },
  {
    label: 'Journal of Surgical Oncology',
    id: 'journal-of-surgical-oncology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-surgical-oncology.csl',
  },
  {
    label: 'Journal of Systematic Palaeontology',
    id: 'journal-of-systematic-palaeontology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-systematic-palaeontology.csl',
  },
  {
    label: 'Journal of the Air & Waste Management Association',
    id: 'journal-of-the-air-and-waste-management-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-air-and-waste-management-association.csl',
  },
  {
    label: 'Journal of the American Academy of Audiology',
    id: 'journal-of-the-american-academy-of-audiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-academy-of-audiology.csl',
  },
  {
    label: 'Journal of the American Academy of Orthopaedic Surgeons',
    id: 'journal-of-the-american-academy-of-orthopaedic-surgeons',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-academy-of-orthopaedic-surgeons.csl',
  },
  {
    label: 'Journal of the American Animal Hospital Association',
    id: 'journal-of-the-american-animal-hospital-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-animal-hospital-association.csl',
  },
  {
    label: 'Journal of the American Association of Laboratory Animal Science',
    id: 'journal-of-the-american-association-of-laboratory-animal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-association-of-laboratory-animal-science.csl',
  },
  {
    label: 'Journal of the American Ceramic Society',
    id: 'journal-of-the-american-ceramic-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-ceramic-society.csl',
  },
  {
    label: 'Journal of the American College of Cardiology',
    id: 'journal-of-the-american-college-of-cardiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-college-of-cardiology.csl',
  },
  {
    label: 'Journal of the American College of Surgeons',
    id: 'journal-of-the-american-college-of-surgeons',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-college-of-surgeons.csl',
  },
  {
    label: 'Journal of the American Heart Association',
    id: 'journal-of-the-american-heart-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-heart-association.csl',
  },
  {
    label: 'Journal of the American Philosophical Association',
    id: 'journal-of-the-american-philosophical-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-philosophical-association.csl',
  },
  {
    label: 'Journal of the American Society of Brewing Chemists',
    id: 'journal-of-the-american-society-of-brewing-chemists',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-society-of-brewing-chemists.csl',
  },
  {
    label: 'Journal of the American Society of Nephrology',
    id: 'journal-of-the-american-society-of-nephrology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-society-of-nephrology.csl',
  },
  {
    label: 'Journal of the American Water Resources Association',
    id: 'journal-of-the-american-water-resources-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-american-water-resources-association.csl',
  },
  {
    label: 'Journal of the Association for Information Systems',
    id: 'journal-of-the-association-for-information-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-association-for-information-systems.csl',
  },
  {
    label:
      'Journal of the Association of Environmental and Resource Economists',
    id: 'journal-of-the-association-of-environmental-and-resource-economists',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-association-of-environmental-and-resource-economists.csl',
  },
  {
    label: 'Journal of the Botanical Research Institute of Texas',
    id: 'journal-of-the-botanical-research-institute-of-texas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-botanical-research-institute-of-texas.csl',
  },
  {
    label: 'Journal of the Brazilian Chemical Society',
    id: 'journal-of-the-brazilian-chemical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-brazilian-chemical-society.csl',
  },
  {
    label: 'Journal of The Electrochemical Society',
    id: 'journal-of-the-electrochemical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-electrochemical-society.csl',
  },
  {
    label: 'Journal of the European Academy of Dermatology and Venereology',
    id: 'journal-of-the-european-academy-of-dermatology-and-venereology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-european-academy-of-dermatology-and-venereology.csl',
  },
  {
    label: 'Journal of the History of Collections',
    id: 'journal-of-the-history-of-collections',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-history-of-collections.csl',
  },
  {
    label: 'Journal of the Indian Law Institute',
    id: 'journal-of-the-indian-law-institute',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-indian-law-institute.csl',
  },
  {
    label: 'Journal of the Korean Society of Civil Engineers',
    id: 'journal-of-the-korean-society-of-civil-engineers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-korean-society-of-civil-engineers.csl',
  },
  {
    label: 'Journal of the Marine Biological Association of the United Kingdom',
    id: 'journal-of-the-marine-biological-association-of-the-united-kingdom',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-marine-biological-association-of-the-united-kingdom.csl',
  },
  {
    label: 'Journal of the Royal Anthropological Institute',
    id: 'journal-of-the-royal-anthropological-institute',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-royal-anthropological-institute.csl',
  },
  {
    label: 'Journal of the Royal Society of Western Australia',
    id: 'journal-of-the-royal-society-of-western-australia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-royal-society-of-western-australia.csl',
  },
  {
    label: 'Journal of the Royal Statistical Society',
    id: 'journal-of-the-royal-statistical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-royal-statistical-society.csl',
  },
  {
    label: 'Journal of the Science of Food and Agriculture',
    id: 'journal-of-the-science-of-food-and-agriculture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-science-of-food-and-agriculture.csl',
  },
  {
    label: 'Journal of the Serbian Chemical Society',
    id: 'journal-of-the-serbian-chemical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-serbian-chemical-society.csl',
  },
  {
    label: 'Journal of the Warburg and Courtauld Institutes',
    id: 'journal-of-the-warburg-and-courtauld-institutes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-the-warburg-and-courtauld-institutes.csl',
  },
  {
    label: 'Journal of Thermal Spray Technology',
    id: 'journal-of-thermal-spray-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-thermal-spray-technology.csl',
  },
  {
    label: 'Journal of Threatened Taxa',
    id: 'journal-of-threatened-taxa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-threatened-taxa.csl',
  },
  {
    label: 'Journal of Thrombosis and Haemostasis',
    id: 'journal-of-thrombosis-and-haemostasis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-thrombosis-and-haemostasis.csl',
  },
  {
    label: 'Journal of Tropical Ecology',
    id: 'journal-of-tropical-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-tropical-ecology.csl',
  },
  {
    label: 'Journal of Tropical Life Science',
    id: 'journal-of-tropical-life-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-tropical-life-science.csl',
  },
  {
    label: 'Journal of Universal Computer Science',
    id: 'journal-of-universal-computer-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-universal-computer-science.csl',
  },
  {
    label: 'Journal of Urban and Environmental Engineering',
    id: 'journal-of-urban-and-environmental-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-urban-and-environmental-engineering.csl',
  },
  {
    label: 'Journal of Urban Technology',
    id: 'journal-of-urban-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-urban-technology.csl',
  },
  {
    label: 'The Journal of Value Inquiry',
    id: 'journal-of-value-inquiry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-value-inquiry.csl',
  },
  {
    label: 'Journal of Vegetation Science',
    id: 'journal-of-vegetation-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-vegetation-science.csl',
  },
  {
    label: 'Journal of Vertebrate Biology',
    id: 'journal-of-vertebrate-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-vertebrate-biology.csl',
  },
  {
    label: 'Journal of Vertebrate Paleontology',
    id: 'journal-of-vertebrate-paleontology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-vertebrate-paleontology.csl',
  },
  {
    label: 'Journal of Vestibular Research',
    id: 'journal-of-vestibular-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-vestibular-research.csl',
  },
  {
    label: 'Journal of Veterinary Diagnostic Investigation',
    id: 'journal-of-veterinary-diagnostic-investigation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-veterinary-diagnostic-investigation.csl',
  },
  {
    label: 'Journal of Visualized Experiments',
    id: 'journal-of-visualized-experiments',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-visualized-experiments.csl',
  },
  {
    label: 'Journal of Water Sanitation and Hygiene for Development',
    id: 'journal-of-water-sanitation-and-hygiene-for-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-water-sanitation-and-hygiene-for-development.csl',
  },
  {
    label: 'Journal of Wildlife Diseases',
    id: 'journal-of-wildlife-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-wildlife-diseases.csl',
  },
  {
    label: 'Journal of Zoo and Wildlife Medicine',
    id: 'journal-of-zoo-and-wildlife-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-zoo-and-wildlife-medicine.csl',
  },
  {
    label: 'Journal of Zoo Biology',
    id: 'journal-of-zoo-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-zoo-biology.csl',
  },
  {
    label: 'Journal of Zoology',
    id: 'journal-of-zoology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-of-zoology.csl',
  },
  {
    label: 'Journal on Efficiency and Responsibility in Education and Science',
    id: 'journal-on-efficiency-and-responsibility-in-education-and-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journal-on-efficiency-and-responsibility-in-education-and-science.csl',
  },
  {
    label: 'Journalistica (Dansk)',
    id: 'journalistica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/journalistica.csl',
  },
  {
    label: 'Jurisprudence (Čeština)',
    id: 'jurisprudence',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jurisprudence.csl',
  },
  {
    label: 'Juristische Schulung (Deutsch)',
    id: 'juristische-schulung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/juristische-schulung.csl',
  },
  {
    label: 'Juristische Zitierweise - Öffentliches Recht (Deutsch)',
    id: 'juristische-zitierweise-offentliches-recht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/juristische-zitierweise-offentliches-recht.csl',
  },
  {
    label:
      'Juristische Zitierweise Schweizer (Ryser Büschi et al.) (Deutsch - Schweiz)',
    id: 'juristische-zitierweise-schweizer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/juristische-zitierweise-schweizer.csl',
  },
  {
    label: 'Juristische Zitierweise (Stüber) (Deutsch)',
    id: 'juristische-zitierweise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/juristische-zitierweise.csl',
  },
  {
    label: 'Jurnal Ilmu dan Teknologi Hasil Ternak',
    id: 'jurnal-ilmu-dan-teknologi-hasil-ternak',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jurnal-ilmu-dan-teknologi-hasil-ternak.csl',
  },
  {
    label: 'Jurnal Pangan dan Agroindustri (Bahasa Indonesia)',
    id: 'jurnal-pangan-dan-agroindustri',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jurnal-pangan-dan-agroindustri.csl',
  },
  {
    label: 'Jurnal Sains Farmasi & Klinis',
    id: 'jurnal-sains-farmasi-dan-klinis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jurnal-sains-farmasi-dan-klinis.csl',
  },
  {
    label: 'Jurnal Teknik Mesin Indonesia (Bahasa Indonesia)',
    id: 'jurnal-teknik-mesin-indonesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jurnal-teknik-mesin-indonesia.csl',
  },
  {
    label: 'Jyväskylän yliopisto - Kemian laitos (Suomi)',
    id: 'jyvaskylan-yliopisto-kemian-laitos',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/jyvaskylan-yliopisto-kemian-laitos.csl',
  },
  {
    label:
      'Karabuk University - Graduate School of Natural and Applied Sciences',
    id: 'karabuk-university-graduate-school-of-natural-and-applied-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/karabuk-university-graduate-school-of-natural-and-applied-sciences.csl',
  },
  {
    label: 'Karger journals (author-date)',
    id: 'karger-journals-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/karger-journals-author-date.csl',
  },
  {
    label: 'Karger journals',
    id: 'karger-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/karger-journals.csl',
  },
  {
    label: 'Karlstad Universitet - Harvard (Svenska)',
    id: 'karlstad-universitet-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/karlstad-universitet-harvard.csl',
  },
  {
    label: 'Karstenia',
    id: 'karstenia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/karstenia.csl',
  },
  {
    label: 'Keel ja Kirjandus (Eesti keel)',
    id: 'keel-ja-kirjandus',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/keel-ja-kirjandus.csl',
  },
  {
    label: 'Kidney Research and Clinical Practice',
    id: 'kidney-research-and-clinical-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kidney-research-and-clinical-practice.csl',
  },
  {
    label: 'Kindheit und Entwicklung',
    id: 'kindheit-und-entwicklung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kindheit-und-entwicklung.csl',
  },
  {
    label:
      'KIT Karlsruher Institut für Technologie Germanistik NDL Neuere Deutsche Literaturwissenschaft (German)',
    id: 'kit-karlsruher-institut-fur-technologie-germanistik-ndl-neuere-deutsche-literaturwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kit-karlsruher-institut-fur-technologie-germanistik-ndl-neuere-deutsche-literaturwissenschaft.csl',
  },
  {
    label: 'Klinische Pädiatrie',
    id: 'klinische-padiatrie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/klinische-padiatrie.csl',
  },
  {
    label: 'Knee Surgery & Related Research',
    id: 'knee-surgery-and-related-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/knee-surgery-and-related-research.csl',
  },
  {
    label: 'Knee Surgery, Sports Traumatology, Arthroscopy',
    id: 'knee-surgery-sports-traumatology-arthroscopy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/knee-surgery-sports-traumatology-arthroscopy.csl',
  },
  {
    label: 'Knowledge & Management of Aquatic Ecosystems',
    id: 'knowledge-and-management-of-aquatic-ecosystems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/knowledge-and-management-of-aquatic-ecosystems.csl',
  },
  {
    label: 'Kölner Zeitschrift für Soziologie und Sozialpsychologie (Deutsch)',
    id: 'kolner-zeitschrift-fur-soziologie-und-sozialpsychologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kolner-zeitschrift-fur-soziologie-und-sozialpsychologie.csl',
  },
  {
    label: 'Kommunikation und Recht (Deutsch)',
    id: 'kommunikation-und-recht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kommunikation-und-recht.csl',
  },
  {
    label: 'KONA Powder and Particle Journal',
    id: 'kona-powder-and-particle-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kona-powder-and-particle-journal.csl',
  },
  {
    label: 'Korean Journal of Anesthesiology',
    id: 'korean-journal-of-anesthesiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/korean-journal-of-anesthesiology.csl',
  },
  {
    label: 'Korean Journal of Radiology',
    id: 'korean-journal-of-radiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/korean-journal-of-radiology.csl',
  },
  {
    label: 'Kritische Ausgabe (Deutsch)',
    id: 'kritische-ausgabe',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kritische-ausgabe.csl',
  },
  {
    label: 'KSCE Journal of Civil Engineering',
    id: 'ksce-journal-of-civil-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ksce-journal-of-civil-engineering.csl',
  },
  {
    label:
      'KTH Royal Institute of Technology - School of Computer Science and Communication (Svenska)',
    id: 'kth-royal-institute-of-technology-school-of-computer-science-and-communication-sv',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kth-royal-institute-of-technology-school-of-computer-science-and-communication-sv.csl',
  },
  {
    label:
      'KTH Royal Institute of Technology - School of Computer Science and Communication',
    id: 'kth-royal-institute-of-technology-school-of-computer-science-and-communication',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kth-royal-institute-of-technology-school-of-computer-science-and-communication.csl',
  },
  {
    label: 'Kunstakademie Münster (Deutsch)',
    id: 'kunstakademie-munster',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/kunstakademie-munster.csl',
  },
  {
    label: "L'homme – Revue française d'anthropologie",
    id: 'l-homme',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/l-homme.csl',
  },
  {
    label: 'la Nouvelle Revue du Travail (Français)',
    id: 'la-nouvelle-revue-du-travail',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/la-nouvelle-revue-du-travail.csl',
  },
  {
    label: 'La Revue des Sciences de Gestion (Français)',
    id: 'la-revue-des-sciences-de-gestion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/la-revue-des-sciences-de-gestion.csl',
  },
  {
    label: 'La Trobe University - APA 6th edition',
    id: 'la-trobe-university-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/la-trobe-university-apa.csl',
  },
  {
    label: 'La Trobe University - Harvard',
    id: 'la-trobe-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/la-trobe-university-harvard.csl',
  },
  {
    label: 'Laboratory Animal Science Professional',
    id: 'laboratory-animal-science-professional',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/laboratory-animal-science-professional.csl',
  },
  {
    label: 'Lancaster University - Harvard',
    id: 'lancaster-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lancaster-university-harvard.csl',
  },
  {
    label: 'Land Degradation & Development',
    id: 'land-degradation-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/land-degradation-and-development.csl',
  },
  {
    label: 'Landes Bioscience Journals',
    id: 'landes-bioscience-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/landes-bioscience-journals.csl',
  },
  {
    label: 'Language in Society',
    id: 'language-in-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/language-in-society.csl',
  },
  {
    label: 'Language',
    id: 'language',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/language.csl',
  },
  {
    label: 'L’Année sociologique (Français)',
    id: 'lannee-sociologique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lannee-sociologique.csl',
  },
  {
    label: 'Latin American Perspectives',
    id: 'latin-american-perspectives',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/latin-american-perspectives.csl',
  },
  {
    label: 'Latin American Research Review',
    id: 'latin-american-research-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/latin-american-research-review.csl',
  },
  {
    label:
      'Lauterbornia - Internationale Zeitschrift für Faunistik und Floristik des Süßwassers (Deutsch)',
    id: 'lauterbornia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lauterbornia.csl',
  },
  {
    label: 'Law & Society Review',
    id: 'law-and-society-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/law-and-society-review.csl',
  },
  {
    label: 'Manual of Legal Citation (法学注引手册, 中文)',
    id: 'law-citation-manual',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/law-citation-manual.csl',
  },
  {
    label: 'Law, Technology and Humans',
    id: 'law-technology-and-humans',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/law-technology-and-humans.csl',
  },
  {
    label: 'LCGC',
    id: 'lcgc',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lcgc.csl',
  },
  {
    label: 'Le Mouvement Social (Français)',
    id: 'le-mouvement-social',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/le-mouvement-social.csl',
  },
  {
    label:
      'Le tapuscrit (École des hautes études en sciences sociales) (author-date, Français)',
    id: 'le-tapuscrit-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/le-tapuscrit-author-date.csl',
  },
  {
    label:
      'Le tapuscrit (École des hautes études en sciences sociales) (note, Français)',
    id: 'le-tapuscrit-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/le-tapuscrit-note.csl',
  },
  {
    label: 'Leiden Journal of International Law',
    id: 'leiden-journal-of-international-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/leiden-journal-of-international-law.csl',
  },
  {
    label: 'Leidraad voor juridische auteurs 2019 (Nederlands)',
    id: 'leidraad-voor-juridische-auteurs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/leidraad-voor-juridische-auteurs.csl',
  },
  {
    label: 'Leonardo',
    id: 'leonardo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/leonardo.csl',
  },
  {
    label: 'Les Cahiers du journalisme (Français)',
    id: 'les-cahiers-du-journalisme',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/les-cahiers-du-journalisme.csl',
  },
  {
    label: 'Les Journées de la Recherche Avicole (Français)',
    id: 'les-journees-de-la-recherche-avicole',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/les-journees-de-la-recherche-avicole.csl',
  },
  {
    label: 'Les Journées de la Recherche Porcine (Français)',
    id: 'les-journees-de-la-recherche-porcine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/les-journees-de-la-recherche-porcine.csl',
  },
  {
    label: 'Les Mondes du travail (Français)',
    id: 'les-mondes-du-travail',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/les-mondes-du-travail.csl',
  },
  {
    label: "Les nouvelles de l'archéologie (Français)",
    id: 'les-nouvelles-de-l-archeologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/les-nouvelles-de-l-archeologie.csl',
  },
  {
    label: 'Lethaia',
    id: 'lethaia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lethaia.csl',
  },
  {
    label: 'Letters in Applied Microbiology',
    id: 'letters-in-applied-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/letters-in-applied-microbiology.csl',
  },
  {
    label: 'Lettres et Sciences Humaines (biblio et notes, Français)',
    id: 'lettres-et-sciences-humaines-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lettres-et-sciences-humaines-fr.csl',
  },
  {
    label: 'Leviathan (Deutsch)',
    id: 'leviathan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/leviathan.csl',
  },
  {
    label: 'Lien social et Politiques (Français)',
    id: 'lien-social-et-politiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lien-social-et-politiques.csl',
  },
  {
    label: 'Life Science Alliance',
    id: 'life-science-alliance',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/life-science-alliance.csl',
  },
  {
    label: 'Limnetica',
    id: 'limnetica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/limnetica.csl',
  },
  {
    label: 'Limnology and Oceanography',
    id: 'limnology-and-oceanography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/limnology-and-oceanography.csl',
  },
  {
    label: 'Liver International',
    id: 'liver-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/liver-international.csl',
  },
  {
    label: 'Liverpool John Moores University - Harvard',
    id: 'liverpool-john-moores-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/liverpool-john-moores-university-harvard.csl',
  },
  {
    label:
      'Guide des références pour la rédaction juridique 7e édition (Notes complètes) (Guide Lluelles, no Ibid., Français - Canada)',
    id: 'lluelles-no-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lluelles-no-ibid.csl',
  },
  {
    label:
      'Guide des références pour la rédaction juridique 7e édition (Guide Lluelles, Français - Canada)',
    id: 'lluelles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lluelles.csl',
  },
  {
    label: 'London Metropolitan University - Harvard',
    id: 'london-metropolitan-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/london-metropolitan-university-harvard.csl',
  },
  {
    label: 'London Review of International Law',
    id: 'london-review-of-international-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/london-review-of-international-law.csl',
  },
  {
    label: 'London South Bank University (numeric)',
    id: 'london-south-bank-university-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/london-south-bank-university-numeric.csl',
  },
  {
    label: 'Lund University School of Economics and Management',
    id: 'lund-university-school-of-economics-and-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/lund-university-school-of-economics-and-management.csl',
  },
  {
    label: 'Macromolecular Reaction Engineering',
    id: 'macromolecular-reaction-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/macromolecular-reaction-engineering.csl',
  },
  {
    label: 'Magnetic Resonance in Medical Sciences',
    id: 'magnetic-resonance-in-medical-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/magnetic-resonance-in-medical-sciences.csl',
  },
  {
    label: 'Magnetic Resonance Materials in Physics, Biology and Medicine',
    id: 'magnetic-resonance-materials-in-physics-biology-and-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/magnetic-resonance-materials-in-physics-biology-and-medicine.csl',
  },
  {
    label: "Maison de l'Orient et de la Méditerranée (English)",
    id: 'maison-de-l-orient-et-de-la-mediterranee-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/maison-de-l-orient-et-de-la-mediterranee-en.csl',
  },
  {
    label: "Maison de l'Orient et de la Méditerranée (Français)",
    id: 'maison-de-l-orient-et-de-la-mediterranee',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/maison-de-l-orient-et-de-la-mediterranee.csl',
  },
  {
    label: 'Malaysian Orthopaedic Journal',
    id: 'malaysian-orthopaedic-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/malaysian-orthopaedic-journal.csl',
  },
  {
    label: 'Mammal Review',
    id: 'mammal-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mammal-review.csl',
  },
  {
    label: 'Mammalia',
    id: 'mammalia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mammalia.csl',
  },
  {
    label: 'Mammalogy Notes',
    id: 'mammalogy-notes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mammalogy-notes.csl',
  },
  {
    label: 'Management & Avenir (Français)',
    id: 'management-et-avenir',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/management-et-avenir.csl',
  },
  {
    label: 'Management international',
    id: 'management-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/management-international.csl',
  },
  {
    label: 'Management of Biological Invasions',
    id: 'management-of-biological-invasions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/management-of-biological-invasions.csl',
  },
  {
    label: 'Manchester University Press monographs (author-date)',
    id: 'manchester-university-press-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/manchester-university-press-author-date.csl',
  },
  {
    label: 'Manchester University Press monographs (note)',
    id: 'manchester-university-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/manchester-university-press.csl',
  },
  {
    label: 'Marine Biology',
    id: 'marine-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/marine-biology.csl',
  },
  {
    label: 'Marine Mammal Science',
    id: 'marine-mammal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/marine-mammal-science.csl',
  },
  {
    label: 'Marine Ornithology',
    id: 'marine-ornithology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/marine-ornithology.csl',
  },
  {
    label: 'Marine Turtle Newsletter',
    id: 'marine-turtle-newsletter',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/marine-turtle-newsletter.csl',
  },
  {
    label: 'Marmara Üniversitesi - Türkiyat Araştırmaları Enstitüsü (Türkçe)',
    id: 'marmara-universitesi-turkiyat-arastirmalari-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/marmara-universitesi-turkiyat-arastirmalari-enstitusu.csl',
  },
  {
    label: 'Mary Ann Liebert - Harvard',
    id: 'mary-ann-liebert-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mary-ann-liebert-harvard.csl',
  },
  {
    label: 'Mary Ann Liebert - Vancouver',
    id: 'mary-ann-liebert-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mary-ann-liebert-vancouver.csl',
  },
  {
    label: 'Masarykova univerzita - Právnická fakulta',
    id: 'masarykova-univerzita-pravnicka-fakulta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/masarykova-univerzita-pravnicka-fakulta.csl',
  },
  {
    label: 'Mastozoologia Neotropical',
    id: 'mastozoologia-neotropical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mastozoologia-neotropical.csl',
  },
  {
    label: 'Materials Express',
    id: 'materials-express',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/materials-express.csl',
  },
  {
    label: 'Mathematical Geosciences',
    id: 'mathematical-geosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mathematical-geosciences.csl',
  },
  {
    label: 'Mathematics and Computers in Simulation',
    id: 'mathematics-and-computers-in-simulation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mathematics-and-computers-in-simulation.csl',
  },
  {
    label: 'McDonald Institute Monographs',
    id: 'mcdonald-institute-monographs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mcdonald-institute-monographs.csl',
  },
  {
    label:
      'Canadian Guide to Uniform Legal Citation 9th edition (McGill Guide)',
    id: 'mcgill-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mcgill-en.csl',
  },
  {
    label:
      'Manuel canadien de la référence juridique 9e édition (Guide McGill, Français - Canada)',
    id: 'mcgill-fr',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mcgill-fr.csl',
  },
  {
    label: 'Médecine Intensive Réanimation',
    id: 'medecine-intensive-reanimation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medecine-intensive-reanimation.csl',
  },
  {
    label: 'médecine/sciences',
    id: 'medecine-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medecine-sciences.csl',
  },
  {
    label: 'Media, Culture & Society',
    id: 'media-culture-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/media-culture-and-society.csl',
  },
  {
    label: 'Mediaeval Studies',
    id: 'mediaeval-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mediaeval-studies.csl',
  },
  {
    label: 'Medical Dosimetry',
    id: 'medical-dosimetry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medical-dosimetry.csl',
  },
  {
    label: 'Medical History',
    id: 'medical-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medical-history.csl',
  },
  {
    label: 'Medicina Clínica (Español)',
    id: 'medicina-clinica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicina-clinica.csl',
  },
  {
    label:
      'Medicina delle Dipendenze - Italian Journal of the Addictions (Italiano)',
    id: 'medicina-delle-dipendenze-italian-journal-of-the-addictions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicina-delle-dipendenze-italian-journal-of-the-addictions.csl',
  },
  {
    label: 'Medicinal Research Reviews',
    id: 'medicinal-research-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicinal-research-reviews.csl',
  },
  {
    label: 'Medicine & Science in Sports & Exercise',
    id: 'medicine-and-science-in-sports-and-exercise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicine-and-science-in-sports-and-exercise.csl',
  },
  {
    label: 'Medicine Publishing',
    id: 'medicine-publishing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicine-publishing.csl',
  },
  {
    label: 'Medicinski razgledi',
    id: 'medicinski-razgledi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicinski-razgledi.csl',
  },
  {
    label: 'Medicinskiy Akademicheskiy Zhurnal',
    id: 'medicinskiy-akademicheskiy-zhurnal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medicinskiy-akademicheskiy-zhurnal.csl',
  },
  {
    label: 'Mediterranean Journal of Chemistry',
    id: 'mediterranean-journal-of-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mediterranean-journal-of-chemistry.csl',
  },
  {
    label: 'Mediterranean Journal of Infection, Microbes and Antimicrobials',
    id: 'mediterranean-journal-of-infection-microbes-and-antimicrobials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mediterranean-journal-of-infection-microbes-and-antimicrobials.csl',
  },
  {
    label: 'Mediterranean Politics',
    id: 'mediterranean-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mediterranean-politics.csl',
  },
  {
    label: 'Medizinische Hochschule Hannover',
    id: 'medizinische-hochschule-hannover',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medizinische-hochschule-hannover.csl',
  },
  {
    label: 'Medizinische Universität Innsbruck - Vancouver (Deutsch)',
    id: 'medizinische-universitat-innsbruck-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/medizinische-universitat-innsbruck-vancouver.csl',
  },
  {
    label: 'Melbourne School of Theology',
    id: 'melbourne-school-of-theology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/melbourne-school-of-theology.csl',
  },
  {
    label: 'Memórias do Instituto Oswaldo Cruz',
    id: 'memorias-do-instituto-oswaldo-cruz',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/memorias-do-instituto-oswaldo-cruz.csl',
  },
  {
    label:
      'Mercator-Institut für Sprachförderung und Deutsch als Zweitsprache (Deutsch)',
    id: 'mercator-institut-fur-sprachforderung-und-deutsch-als-zweitsprache',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mercator-institut-fur-sprachforderung-und-deutsch-als-zweitsprache.csl',
  },
  {
    label: 'Mercatus Center',
    id: 'mercatus-center',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mercatus-center.csl',
  },
  {
    label: 'Meta',
    id: 'meta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/meta.csl',
  },
  {
    label: 'Metallurgical and Materials Transactions A',
    id: 'metallurgical-and-materials-transactions-a',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/metallurgical-and-materials-transactions-a.csl',
  },
  {
    label: 'Metallurgical and Materials Transactions',
    id: 'metallurgical-and-materials-transactions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/metallurgical-and-materials-transactions.csl',
  },
  {
    label: 'Meteoritics & Planetary Science',
    id: 'meteoritics-and-planetary-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/meteoritics-and-planetary-science.csl',
  },
  {
    label: 'Meteorological Applications',
    id: 'meteorological-applications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/meteorological-applications.csl',
  },
  {
    label: 'Method & Theory in the Study of Religion',
    id: 'method-and-theory-in-the-study-of-religion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/method-and-theory-in-the-study-of-religion.csl',
  },
  {
    label: 'Methods of Information in Medicine',
    id: 'methods-of-information-in-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/methods-of-information-in-medicine.csl',
  },
  {
    label: 'Metropol Verlag (Deutsch)',
    id: 'metropol-verlag',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/metropol-verlag.csl',
  },
  {
    label: 'Metropolia Ammattikorkeakoulu - Harvard (Suomi)',
    id: 'metropolia-university-of-applied-sciences-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/metropolia-university-of-applied-sciences-harvard.csl',
  },
  {
    label: 'Métropolitiques (Français)',
    id: 'metropolitiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/metropolitiques.csl',
  },
  {
    label: 'Microbial Cell',
    id: 'microbial-cell',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/microbial-cell.csl',
  },
  {
    label: 'Microbiology Society',
    id: 'microbiology-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/microbiology-society.csl',
  },
  {
    label: 'Microbiome Research Reports',
    id: 'microbiome-research-reports',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/microbiome-research-reports.csl',
  },
  {
    label: 'Microcirculation',
    id: 'microcirculation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/microcirculation.csl',
  },
  {
    label: 'Microscopy and Microanalysis',
    id: 'microscopy-and-microanalysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/microscopy-and-microanalysis.csl',
  },
  {
    label: 'Middle East Critique',
    id: 'middle-east-critique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/middle-east-critique.csl',
  },
  {
    label: 'Midwestern Baptist Theological Seminary',
    id: 'midwestern-baptist-theological-seminary',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/midwestern-baptist-theological-seminary.csl',
  },
  {
    label: 'Mimbar Hukum',
    id: 'mimbar-hukum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mimbar-hukum.csl',
  },
  {
    label: 'Mimesis Edizioni (Italiano)',
    id: 'mimesis-edizioni',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mimesis-edizioni.csl',
  },
  {
    label: 'Mind & Language',
    id: 'mind-and-language',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mind-and-language.csl',
  },
  {
    label: 'Mineralogical Magazine',
    id: 'mineralogical-magazine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mineralogical-magazine.csl',
  },
  {
    label: 'MIS Quarterly',
    id: 'mis-quarterly',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mis-quarterly.csl',
  },
  {
    label: 'Modern Chinese Literature and Culture',
    id: 'modern-chinese-literature-and-culture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-chinese-literature-and-culture.csl',
  },
  {
    label: 'Modern Humanities Research Association 3rd edition (author-date)',
    id: 'modern-humanities-research-association-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-humanities-research-association-author-date.csl',
  },
  {
    label:
      'Modern Humanities Research Association 3rd edition (note with bibliography)',
    id: 'modern-humanities-research-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-humanities-research-association.csl',
  },
  {
    label: 'Modern Language Association 6th edition (note)',
    id: 'modern-language-association-6th-edition-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association-6th-edition-note.csl',
  },
  {
    label: 'Modern Language Association 7th edition (underline)',
    id: 'modern-language-association-7th-edition-underline',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association-7th-edition-underline.csl',
  },
  {
    label: 'Modern Language Association 7th edition (with URL)',
    id: 'modern-language-association-7th-edition-with-url',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association-7th-edition-with-url.csl',
  },
  {
    label: 'Modern Language Association 7th edition',
    id: 'modern-language-association-7th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association-7th-edition.csl',
  },
  {
    label: 'Modern Language Association 8th edition',
    id: 'modern-language-association-8th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association-8th-edition.csl',
  },
  {
    label: 'Modern Language Association 9th edition',
    id: 'modern-language-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-language-association.csl',
  },
  {
    label: 'Modern Pathology',
    id: 'modern-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-pathology.csl',
  },
  {
    label: 'Modern Phytomorphology',
    id: 'modern-phytomorphology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/modern-phytomorphology.csl',
  },
  {
    label: 'Mohr Siebeck - Recht (Deutsch - Österreich)',
    id: 'mohr-siebeck-recht',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mohr-siebeck-recht.csl',
  },
  {
    label: 'Molecular & Cellular Proteomics',
    id: 'molecular-and-cellular-proteomics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-and-cellular-proteomics.csl',
  },
  {
    label: 'Molecular Biology and Evolution',
    id: 'molecular-biology-and-evolution',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-biology-and-evolution.csl',
  },
  {
    label: 'Molecular Biology of the Cell',
    id: 'molecular-biology-of-the-cell',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-biology-of-the-cell.csl',
  },
  {
    label: 'Molecular Biology',
    id: 'molecular-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-biology.csl',
  },
  {
    label: 'Molecular Metabolism',
    id: 'molecular-metabolism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-metabolism.csl',
  },
  {
    label: 'Molecular Microbiology',
    id: 'molecular-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-microbiology.csl',
  },
  {
    label: 'Molecular Nutrition & Food Research',
    id: 'molecular-nutrition-and-food-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-nutrition-and-food-research.csl',
  },
  {
    label: 'Molecular Oncology',
    id: 'molecular-oncology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-oncology.csl',
  },
  {
    label: 'Molecular Plant-Microbe Interactions',
    id: 'molecular-plant-microbe-interactions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-plant-microbe-interactions.csl',
  },
  {
    label: 'Molecular Plant Pathology',
    id: 'molecular-plant-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-plant-pathology.csl',
  },
  {
    label: 'Molecular Plant',
    id: 'molecular-plant',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-plant.csl',
  },
  {
    label: 'Molecular Psychiatry (letters to the editor)',
    id: 'molecular-psychiatry-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-psychiatry-letters.csl',
  },
  {
    label: 'Molecular Psychiatry',
    id: 'molecular-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/molecular-psychiatry.csl',
  },
  {
    label: 'Monash University - CSIRO',
    id: 'monash-university-csiro',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/monash-university-csiro.csl',
  },
  {
    label: 'Mondes en développement (Français)',
    id: 'mondes-en-developpement',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mondes-en-developpement.csl',
  },
  {
    label: 'Monographs of the Palaeontographical Society',
    id: 'monographs-of-the-palaeontographical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/monographs-of-the-palaeontographical-society.csl',
  },
  {
    label: 'Moorlands College',
    id: 'moorlands-college',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/moorlands-college.csl',
  },
  {
    label: 'Mots (French)',
    id: 'mots',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mots.csl',
  },
  {
    label: 'MRS Bulletin',
    id: 'mrs-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mrs-bulletin.csl',
  },
  {
    label: 'Multidisciplinary Digital Publishing Institute',
    id: 'multidisciplinary-digital-publishing-institute',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/multidisciplinary-digital-publishing-institute.csl',
  },
  {
    label: 'Multilingual Matters',
    id: 'multilingual-matters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/multilingual-matters.csl',
  },
  {
    label: 'Multimed (Español)',
    id: 'multimed',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/multimed.csl',
  },
  {
    label: 'Multiple Sclerosis Journal',
    id: 'multiple-sclerosis-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/multiple-sclerosis-journal.csl',
  },
  {
    label: 'Muscle & Nerve',
    id: 'muscle-and-nerve',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/muscle-and-nerve.csl',
  },
  {
    label: "Muséum national d'Histoire naturelle",
    id: 'museum-national-dhistoire-naturelle',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/museum-national-dhistoire-naturelle.csl',
  },
  {
    label: 'Music Theory Spectrum',
    id: 'music-theory-spectrum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/music-theory-spectrum.csl',
  },
  {
    label: 'Mutagenesis',
    id: 'mutagenesis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mutagenesis.csl',
  },
  {
    label: 'Mycobiology',
    id: 'mycobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mycobiology.csl',
  },
  {
    label: 'Mycologia',
    id: 'mycologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/mycologia.csl',
  },
  {
    label: 'Myrmecological News',
    id: 'myrmecological-news',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/myrmecological-news.csl',
  },
  {
    label: 'Nano Biomedicine and Engineering',
    id: 'nano-biomedicine-and-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nano-biomedicine-and-engineering.csl',
  },
  {
    label: 'natbib - plainnat (author-date)',
    id: 'natbib-plainnat-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/natbib-plainnat-author-date.csl',
  },
  {
    label: 'National Archives of Australia',
    id: 'national-archives-of-australia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-archives-of-australia.csl',
  },
  {
    label: 'National Institute of Health Research',
    id: 'national-institute-of-health-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-institute-of-health-research.csl',
  },
  {
    label: 'National Institute of Organisation Dynamics Australia - Harvard',
    id: 'national-institute-of-organisation-dynamics-australia-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-institute-of-organisation-dynamics-australia-harvard.csl',
  },
  {
    label: 'National Institute of Technology Karnataka',
    id: 'national-institute-of-technology-karnataka',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-institute-of-technology-karnataka.csl',
  },
  {
    label: 'National Institute of Technology, Tiruchirappalli',
    id: 'national-institute-of-technology-tiruchirappalli',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-institute-of-technology-tiruchirappalli.csl',
  },
  {
    label: 'National Library of Medicine (grant proposals with PMCID/PMID)',
    id: 'national-library-of-medicine-grant-proposals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-library-of-medicine-grant-proposals.csl',
  },
  {
    label:
      'National Marine Fisheries Service - National Environmental Policy Act',
    id: 'national-marine-fisheries-service-national-environmental-policy-act',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-marine-fisheries-service-national-environmental-policy-act.csl',
  },
  {
    label: 'National Natural Science Foundation of China (中文)',
    id: 'national-natural-science-foundation-of-china',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-natural-science-foundation-of-china.csl',
  },
  {
    label: 'National Science Foundation (grant proposals)',
    id: 'national-science-foundation-grant-proposals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-science-foundation-grant-proposals.csl',
  },
  {
    label:
      'National University of Singapore - Department of Geography - Harvard',
    id: 'national-university-of-singapore-department-of-geography-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/national-university-of-singapore-department-of-geography-harvard.csl',
  },
  {
    label: 'Nations and Nationalism',
    id: 'nations-and-nationalism',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nations-and-nationalism.csl',
  },
  {
    label: 'Natur und Landschaft (Deutsch)',
    id: 'natur-und-landschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/natur-und-landschaft.csl',
  },
  {
    label: 'Natura Croatica',
    id: 'natura-croatica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/natura-croatica.csl',
  },
  {
    label: 'Nature Neuroscience (brief communications)',
    id: 'nature-neuroscience-brief-communications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nature-neuroscience-brief-communications.csl',
  },
  {
    label: 'Nature (no "et al.")',
    id: 'nature-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nature-no-et-al.csl',
  },
  {
    label: 'Nature (no superscript)',
    id: 'nature-no-superscript',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nature-no-superscript.csl',
  },
  {
    label: 'Nature Publishing Group - Vancouver',
    id: 'nature-publishing-group-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nature-publishing-group-vancouver.csl',
  },
  {
    label: 'Nature',
    id: 'nature',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nature.csl',
  },
  {
    label: 'Natures Sciences Sociétés',
    id: 'natures-sciences-societes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/natures-sciences-societes.csl',
  },
  {
    label: 'Nauplius',
    id: 'nauplius',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nauplius.csl',
  },
  {
    label: 'Navigation',
    id: 'navigation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/navigation.csl',
  },
  {
    label:
      'NCCR Mediality. Medienwandel - Medienwechsel - Medienwissen (Deutsch)',
    id: 'nccr-mediality',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nccr-mediality.csl',
  },
  {
    label:
      'Necmettin Erbakan Üniversitesi Fen ve Mühendislik Bilimleri Dergisi (Türkçe)',
    id: 'necmettin-erbakan-universitesi-fen-ve-muhendislik-bilimleri-dergisi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/necmettin-erbakan-universitesi-fen-ve-muhendislik-bilimleri-dergisi.csl',
  },
  {
    label: 'NeHeT (Français)',
    id: 'nehet',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nehet.csl',
  },
  {
    label: 'NEJM Catalyst Innovations in Care Delivery',
    id: 'nejm-catalyst-innovations-in-care-delivery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nejm-catalyst-innovations-in-care-delivery.csl',
  },
  {
    label: 'Nephrology Dialysis Transplantation',
    id: 'nephrology-dialysis-transplantation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nephrology-dialysis-transplantation.csl',
  },
  {
    label: 'Netherlands Journal of Geosciences - Geologie en Mijnbouw',
    id: 'netherlands-journal-of-geosciences-geologie-en-mijnbouw',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/netherlands-journal-of-geosciences-geologie-en-mijnbouw.csl',
  },
  {
    label: 'Neue Juristische Wochenschrift (Deutsch)',
    id: 'neue-juristische-wochenschrift',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neue-juristische-wochenschrift.csl',
  },
  {
    label: 'Neue Kriminalpolitik (Deutsch)',
    id: 'neue-kriminalpolitik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neue-kriminalpolitik.csl',
  },
  {
    label: 'Neural Plasticity',
    id: 'neural-plasticity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neural-plasticity.csl',
  },
  {
    label: 'Neuroendocrinology Letters',
    id: 'neuroendocrinology-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neuroendocrinology-letters.csl',
  },
  {
    label: 'Neuroimaging Clinics of North America',
    id: 'neuroimaging-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neuroimaging-clinics-of-north-america.csl',
  },
  {
    label: 'Neurología Argentina (Español)',
    id: 'neurologia-argentina',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurologia-argentina.csl',
  },
  {
    label: 'Neurología (Español)',
    id: 'neurologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurologia.csl',
  },
  {
    label: 'Neurology India',
    id: 'neurology-india',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurology-india.csl',
  },
  {
    label: 'Neurology',
    id: 'neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurology.csl',
  },
  {
    label: 'Neuropsychopharmacology',
    id: 'neuropsychopharmacology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neuropsychopharmacology.csl',
  },
  {
    label: 'Neurorehabilitation and Neural Repair',
    id: 'neurorehabilitation-and-neural-repair',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurorehabilitation-and-neural-repair.csl',
  },
  {
    label: 'NeuroReport',
    id: 'neuroreport',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neuroreport.csl',
  },
  {
    label: 'Neurospine',
    id: 'neurospine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurospine.csl',
  },
  {
    label: 'Neurosurgery Clinics of North America',
    id: 'neurosurgery-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/neurosurgery-clinics-of-north-america.csl',
  },
  {
    label: "New Hart's Rules: The Oxford Style Guide (author-date)",
    id: 'new-harts-rules-the-oxford-style-guide-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-harts-rules-the-oxford-style-guide-author-date.csl',
  },
  {
    label: "New Hart's Rules: The Oxford Style Guide",
    id: 'new-harts-rules-the-oxford-style-guide',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-harts-rules-the-oxford-style-guide.csl',
  },
  {
    label: 'New Phytologist',
    id: 'new-phytologist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-phytologist.csl',
  },
  {
    label: 'New Solutions',
    id: 'new-solutions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-solutions.csl',
  },
  {
    label: 'New Testament Studies',
    id: 'new-testament-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-testament-studies.csl',
  },
  {
    label: 'New Zealand Dental Journal',
    id: 'new-zealand-dental-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-zealand-dental-journal.csl',
  },
  {
    label: 'New Zealand Journal of Forestry Science',
    id: 'new-zealand-journal-of-forestry-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-zealand-journal-of-forestry-science.csl',
  },
  {
    label: 'New Zealand Journal of History',
    id: 'new-zealand-journal-of-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-zealand-journal-of-history.csl',
  },
  {
    label: 'New Zealand Plant Protection',
    id: 'new-zealand-plant-protection',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-zealand-plant-protection.csl',
  },
  {
    label: 'New Zealand Veterinary Journal',
    id: 'new-zealand-veterinary-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/new-zealand-veterinary-journal.csl',
  },
  {
    label: 'NIST Technical Publications - Journal of Research of NIST',
    id: 'nist-technical-publication-journal-of-research-of-nist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nist-technical-publication-journal-of-research-of-nist.csl',
  },
  {
    label: 'Nordic Pulp & Paper Research Journal',
    id: 'nordic-pulp-and-paper-research-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nordic-pulp-and-paper-research-journal.csl',
  },
  {
    label: 'Norma Portuguesa 405 (Português)',
    id: 'norma-portuguesa-405',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/norma-portuguesa-405.csl',
  },
  {
    label: 'Norois (Français)',
    id: 'norois',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/norois.csl',
  },
  {
    label: 'Norsk APA-manual - APA 7th edition (note)',
    id: 'norsk-apa-manual-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/norsk-apa-manual-note.csl',
  },
  {
    label: 'Norsk APA-manual - APA 7th edition (author-date)',
    id: 'norsk-apa-manual',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/norsk-apa-manual.csl',
  },
  {
    label:
      'Norsk henvisningsstandard for rettsvitenskapelige tekster (Norsk - Bokmål)',
    id: 'norsk-henvisningsstandard-for-rettsvitenskapelige-tekster',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/norsk-henvisningsstandard-for-rettsvitenskapelige-tekster.csl',
  },
  {
    label: 'North Pacific Anadromous Fish Commission Bulletin',
    id: 'north-pacific-anadromous-fish-commission-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/north-pacific-anadromous-fish-commission-bulletin.csl',
  },
  {
    label: 'Northeastern Naturalist',
    id: 'northeastern-naturalist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/northeastern-naturalist.csl',
  },
  {
    label: 'Nottingham Trent University Library - Harvard',
    id: 'nottingham-trent-university-library-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nottingham-trent-university-library-harvard.csl',
  },
  {
    label: 'Nouvelles perspectives en sciences sociales (Français - Canada)',
    id: 'nouvelles-perspectives-en-sciences-sociales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nouvelles-perspectives-en-sciences-sociales.csl',
  },
  {
    label: 'Novasinergia',
    id: 'novasinergia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/novasinergia.csl',
  },
  {
    label: 'Nowa Audiofonologia (Polski)',
    id: 'nowa-audiofonologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nowa-audiofonologia.csl',
  },
  {
    label: 'Nuclear Receptor Signaling',
    id: 'nuclear-receptor-signaling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nuclear-receptor-signaling.csl',
  },
  {
    label: 'Nucleic Acids Research - Web Server Issue',
    id: 'nucleic-acids-research-web-server-issue',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nucleic-acids-research-web-server-issue.csl',
  },
  {
    label: 'Nucleic Acids Research',
    id: 'nucleic-acids-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nucleic-acids-research.csl',
  },
  {
    label: 'Nutrition Research Reviews',
    id: 'nutrition-research-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nutrition-research-reviews.csl',
  },
  {
    label: 'NyS - Nydanske Sprogstudier (Dansk)',
    id: 'nys-nydanske-sprogstudier',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/nys-nydanske-sprogstudier.csl',
  },
  {
    label: 'Obafemi Awolowo University - Faculty of Technology',
    id: 'obafemi-awolowo-university-faculty-of-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/obafemi-awolowo-university-faculty-of-technology.csl',
  },
  {
    label: 'Obesity',
    id: 'obesity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/obesity.csl',
  },
  {
    label: 'Obstetrics & Gynecology Science',
    id: 'obstetrics-and-gynecology-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/obstetrics-and-gynecology-science.csl',
  },
  {
    label: 'Occupational Medicine',
    id: 'occupational-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/occupational-medicine.csl',
  },
  {
    label: 'Ocean and Coastal Research',
    id: 'ocean-and-coastal-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ocean-and-coastal-research.csl',
  },
  {
    label: 'Oceanography',
    id: 'oceanography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oceanography.csl',
  },
  {
    label: 'Oecologia Australis',
    id: 'oecologia-australis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oecologia-australis.csl',
  },
  {
    label: 'Offa - Berichte und Mitteilungen zur Archäologie',
    id: 'offa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/offa.csl',
  },
  {
    label: 'Oikos',
    id: 'oikos',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oikos.csl',
  },
  {
    label: 'Oil Shale',
    id: 'oil-shale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oil-shale.csl',
  },
  {
    label: 'OncoImmunology',
    id: 'oncoimmunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oncoimmunology.csl',
  },
  {
    label: 'Oncotarget',
    id: 'oncotarget',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oncotarget.csl',
  },
  {
    label: 'Open Gender Journal',
    id: 'open-gender-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/open-gender-journal.csl',
  },
  {
    label: 'Open Window - Harvard',
    id: 'open-window',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/open-window.csl',
  },
  {
    label: 'Operative Dentistry',
    id: 'operative-dentistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/operative-dentistry.csl',
  },
  {
    label: 'Ophthalmic Genetics',
    id: 'ophthalmic-genetics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ophthalmic-genetics.csl',
  },
  {
    label: 'Ophthalmology Retina',
    id: 'ophthalmology-retina',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ophthalmology-retina.csl',
  },
  {
    label: 'Ophthalmology',
    id: 'ophthalmology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ophthalmology.csl',
  },
  {
    label: 'Optics Express',
    id: 'optics-express',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/optics-express.csl',
  },
  {
    label: 'Optics Letters',
    id: 'optics-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/optics-letters.csl',
  },
  {
    label: 'Opto-Electronic Advances',
    id: 'opto-electronic-advances',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/opto-electronic-advances.csl',
  },
  {
    label: 'Optometry & Vision Science',
    id: 'optometry-and-vision-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/optometry-and-vision-science.csl',
  },
  {
    label: 'Opuscula',
    id: 'opuscula',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/opuscula.csl',
  },
  {
    label: 'Oral Diseases',
    id: 'oral-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oral-diseases.csl',
  },
  {
    label: 'Organic Geochemistry',
    id: 'organic-geochemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/organic-geochemistry.csl',
  },
  {
    label: 'Organised Sound',
    id: 'organised-sound',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/organised-sound.csl',
  },
  {
    label: 'Organization Studies',
    id: 'organization-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/organization-studies.csl',
  },
  {
    label: 'Organization',
    id: 'organization',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/organization.csl',
  },
  {
    label: 'Organon',
    id: 'organon',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/organon.csl',
  },
  {
    label: 'Ornitología Neotropical',
    id: 'ornitologia-neotropical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ornitologia-neotropical.csl',
  },
  {
    label: 'Orthopedic Clinics of North America',
    id: 'orthopedic-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/orthopedic-clinics-of-north-america.csl',
  },
  {
    label: 'Oryx',
    id: 'oryx',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oryx.csl',
  },
  {
    label:
      'OSCOLA (Oxford University Standard for Citation of Legal Authorities) (no Ibid.)',
    id: 'oscola-no-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oscola-no-ibid.csl',
  },
  {
    label:
      'OSCOLA (Oxford University Standard for Citation of Legal Authorities)',
    id: 'oscola',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oscola.csl',
  },
  {
    label:
      'Österreichische Zeitschrift für Politikwissenschaft (Deutsch - Österreich)',
    id: 'osterreichische-zeitschrift-fur-politikwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/osterreichische-zeitschrift-fur-politikwissenschaft.csl',
  },
  {
    label:
      'Otto-von-Guericke-Universität Magdeburg - Medizinische Fakultät (numeric)',
    id: 'otto-von-guricke-universitat-magdeburg-medizinische-fakultat-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/otto-von-guricke-universitat-magdeburg-medizinische-fakultat-numeric.csl',
  },
  {
    label: 'O.W. Barth Verlag (Deutsch)',
    id: 'owbarth-verlag',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/owbarth-verlag.csl',
  },
  {
    label: 'Oxford Art Journal',
    id: 'oxford-art-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-art-journal.csl',
  },
  {
    label: 'Oxford Centre for Mission Studies - Harvard',
    id: 'oxford-centre-for-mission-studies-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-centre-for-mission-studies-harvard.csl',
  },
  {
    label: 'Oxford Studies in Ancient Philosophy',
    id: 'oxford-studies-in-ancient-philosophy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-studies-in-ancient-philosophy.csl',
  },
  {
    label: 'Oxford Studies on the Roman Economy',
    id: 'oxford-studies-on-the-roman-economy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-studies-on-the-roman-economy.csl',
  },
  {
    label: 'The University of New South Wales - Oxford',
    id: 'oxford-the-university-of-new-south-wales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-the-university-of-new-south-wales.csl',
  },
  {
    label: 'Oxford University Press HUMSOC',
    id: 'oxford-university-press-humsoc',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-university-press-humsoc.csl',
  },
  {
    label: 'Oxford University Press (note)',
    id: 'oxford-university-press-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-university-press-note.csl',
  },
  {
    label: 'Oxford University Press SciMed (author-date)',
    id: 'oxford-university-press-scimed-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-university-press-scimed-author-date.csl',
  },
  {
    label: 'Oxford University Press SciMed (numeric)',
    id: 'oxford-university-press-scimed-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxford-university-press-scimed-numeric.csl',
  },
  {
    label: 'Oxidation of Metals',
    id: 'oxidation-of-metals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/oxidation-of-metals.csl',
  },
  {
    label: 'Pacific Conservation Biology',
    id: 'pacific-conservation-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pacific-conservation-biology.csl',
  },
  {
    label: 'Pacific Science',
    id: 'pacific-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pacific-science.csl',
  },
  {
    label:
      'Pädagogische Hochschule Bern - Institut Vorschulstufe und Primarstufe',
    id: 'padagogische-hochschule-bern-institut-vorschulstufe-und-primarstufe',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/padagogische-hochschule-bern-institut-vorschulstufe-und-primarstufe.csl',
  },
  {
    label:
      'Pädagogische Hochschule Fachhochschule Nordwestschweiz (Deutsch - Schweiz)',
    id: 'padagogische-hochschule-fachhochschule-nordwestschweiz',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/padagogische-hochschule-fachhochschule-nordwestschweiz.csl',
  },
  {
    label: 'Pädagogische Hochschule Heidelberg (Deutsch)',
    id: 'padagogische-hochschule-heidelberg',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/padagogische-hochschule-heidelberg.csl',
  },
  {
    label: 'Pädagogische Hochschule Vorarlberg (Deutsch)',
    id: 'padagogische-hochschule-vorarlberg',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/padagogische-hochschule-vorarlberg.csl',
  },
  {
    label: 'Paediatric and Perinatal Epidemiology',
    id: 'paediatric-and-perinatal-epidemiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/paediatric-and-perinatal-epidemiology.csl',
  },
  {
    label: 'Pain Medicine',
    id: 'pain-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pain-medicine.csl',
  },
  {
    label: 'PAIN',
    id: 'pain',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pain.csl',
  },
  {
    label: 'Pakistan Journal of Agricultural Sciences',
    id: 'pakistan-journal-of-agricultural-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pakistan-journal-of-agricultural-sciences.csl',
  },
  {
    label: 'Pakistan Veterinary Journal',
    id: 'pakistani-veterinary-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pakistani-veterinary-journal.csl',
  },
  {
    label: 'Palaeodiversity',
    id: 'palaeodiversity',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaeodiversity.csl',
  },
  {
    label: 'Palaeontographica Abteilung B: Palaeobotany - Palaeophytology',
    id: 'palaeontographica-abteilung-b-palaeobotany-palaeophytology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaeontographica-abteilung-b-palaeobotany-palaeophytology.csl',
  },
  {
    label: 'Palaeontologia Electronica',
    id: 'palaeontologia-electronica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaeontologia-electronica.csl',
  },
  {
    label: 'Palaeontology',
    id: 'palaeontology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaeontology.csl',
  },
  {
    label: 'Palaeovertebrata',
    id: 'palaeovertebrata',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaeovertebrata.csl',
  },
  {
    label: 'Palaios',
    id: 'palaios',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/palaios.csl',
  },
  {
    label: 'Paleobiology',
    id: 'paleobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/paleobiology.csl',
  },
  {
    label: 'Pallas (French)',
    id: 'pallas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pallas.csl',
  },
  {
    label: 'Parasite',
    id: 'parasite',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/parasite.csl',
  },
  {
    label: 'Parasitology',
    id: 'parasitology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/parasitology.csl',
  },
  {
    label: 'Past & Present',
    id: 'past-and-present',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/past-and-present.csl',
  },
  {
    label: 'Pediatric Allergy and Immunology',
    id: 'pediatric-allergy-and-immunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-allergy-and-immunology.csl',
  },
  {
    label: 'Pediatric Anesthesia',
    id: 'pediatric-anesthesia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-anesthesia.csl',
  },
  {
    label: 'Pediatric Blood & Cancer',
    id: 'pediatric-blood-and-cancer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-blood-and-cancer.csl',
  },
  {
    label: 'Pediatric Infectious Disease Journal',
    id: 'pediatric-infectious-disease-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-infectious-disease-journal.csl',
  },
  {
    label: 'Pediatric Physical Therapy',
    id: 'pediatric-physical-therapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-physical-therapy.csl',
  },
  {
    label: 'Pediatric Practice and Research',
    id: 'pediatric-practice-and-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-practice-and-research.csl',
  },
  {
    label: 'Pediatric Pulmonology',
    id: 'pediatric-pulmonology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-pulmonology.csl',
  },
  {
    label: 'Pediatric Research',
    id: 'pediatric-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-research.csl',
  },
  {
    label: 'Pediatric Urology Case Reports',
    id: 'pediatric-urology-case-reports',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pediatric-urology-case-reports.csl',
  },
  {
    label: 'Pedosphere',
    id: 'pedosphere',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pedosphere.csl',
  },
  {
    label: 'PeerJ',
    id: 'peerj',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/peerj.csl',
  },
  {
    label: 'Pensoft Journals',
    id: 'pensoft-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pensoft-journals.csl',
  },
  {
    label: 'Periodicum Biologorum',
    id: 'periodicum-biologorum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/periodicum-biologorum.csl',
  },
  {
    label: 'Periodontology 2000',
    id: 'periodontology-2000',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/periodontology-2000.csl',
  },
  {
    label: 'Permafrost and Periglacial Processes',
    id: 'permafrost-and-periglacial-processes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/permafrost-and-periglacial-processes.csl',
  },
  {
    label: 'Perspectives on Sexual and Reproductive Health',
    id: 'perspectives-on-sexual-and-reproductive-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/perspectives-on-sexual-and-reproductive-health.csl',
  },
  {
    label: 'Pesquisa Agropecuária Brasileira (Português - Brasil)',
    id: 'pesquisa-agropecuaria-brasileira',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pesquisa-agropecuaria-brasileira.csl',
  },
  {
    label: 'Pest Management Science',
    id: 'pest-management-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pest-management-science.csl',
  },
  {
    label: 'Petit Chicago (author-date, Français - Canada)',
    id: 'petit-chicago-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/petit-chicago-author-date.csl',
  },
  {
    label: 'Pharmacoepidemiology and Drug Safety',
    id: 'pharmacoepidemiology-and-drug-safety',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pharmacoepidemiology-and-drug-safety.csl',
  },
  {
    label: 'Philippika (Deutsch)',
    id: 'philippika',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/philippika.csl',
  },
  {
    label:
      'Philipps-Universität Marburg - Erziehungswissenschaften (note, Deutsch)',
    id: 'philipps-universitat-marburg-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/philipps-universitat-marburg-note.csl',
  },
  {
    label: 'Philosophia Scientiæ',
    id: 'philosophia-scientiae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/philosophia-scientiae.csl',
  },
  {
    label: 'Philosophiques (Français)',
    id: 'philosophiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/philosophiques.csl',
  },
  {
    label: 'Philosophy & Public Affairs',
    id: 'philosophy-and-public-affairs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/philosophy-and-public-affairs.csl',
  },
  {
    label: 'Photochemistry and Photobiology',
    id: 'photochemistry-and-photobiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/photochemistry-and-photobiology.csl',
  },
  {
    label: 'Photosynthetica',
    id: 'photosynthetica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/photosynthetica.csl',
  },
  {
    label: 'Phycological Research',
    id: 'phycological-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/phycological-research.csl',
  },
  {
    label: 'Phyllomedusa',
    id: 'phyllomedusa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/phyllomedusa.csl',
  },
  {
    label: 'Physiologia Plantarum',
    id: 'physiologia-plantarum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/physiologia-plantarum.csl',
  },
  {
    label: 'Physiological and Biochemical Zoology',
    id: 'physiological-and-biochemical-zoology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/physiological-and-biochemical-zoology.csl',
  },
  {
    label: 'Physiotherapy Theory and Practice',
    id: 'physiotherapy-theory-and-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/physiotherapy-theory-and-practice.csl',
  },
  {
    label: 'Phytopathologia Mediterranea',
    id: 'phytopathologia-mediterranea',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/phytopathologia-mediterranea.csl',
  },
  {
    label: 'Phytotaxa',
    id: 'phytotaxa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/phytotaxa.csl',
  },
  {
    label: 'Pisa University Press',
    id: 'pisa-university-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pisa-university-press.csl',
  },
  {
    label: 'Planning Practice & Research',
    id: 'planning-practice-and-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/planning-practice-and-research.csl',
  },
  {
    label: 'Plant & Cell Physiology',
    id: 'plant-and-cell-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-and-cell-physiology.csl',
  },
  {
    label: 'Plant Biology',
    id: 'plant-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-biology.csl',
  },
  {
    label: 'Plant Biotechnology Journal',
    id: 'plant-biotechnology-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-biotechnology-journal.csl',
  },
  {
    label: 'Plant, Cell & Environment',
    id: 'plant-cell-and-environment',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-cell-and-environment.csl',
  },
  {
    label: 'Plant Genetic Resources - Characterization and Utilization',
    id: 'plant-genetic-resources-characterization-and-utilization',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-genetic-resources-characterization-and-utilization.csl',
  },
  {
    label: 'Plant Pathology',
    id: 'plant-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-pathology.csl',
  },
  {
    label: 'Plant Physiology',
    id: 'plant-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-physiology.csl',
  },
  {
    label: 'Plant Species Biology',
    id: 'plant-species-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plant-species-biology.csl',
  },
  {
    label: 'Public Library of Science',
    id: 'plos',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/plos.csl',
  },
  {
    label:
      'Proceedings of the National Academy of Sciences of the United States of America',
    id: 'pnas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pnas.csl',
  },
  {
    label: 'Podzemná voda (Slovenčina)',
    id: 'podzemna-voda',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/podzemna-voda.csl',
  },
  {
    label: 'Polar Research',
    id: 'polar-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/polar-research.csl',
  },
  {
    label: 'Polish Archives of Internal Medicine',
    id: 'polish-archives-of-internal-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/polish-archives-of-internal-medicine.csl',
  },
  {
    label: 'Polish Legal (Polski)',
    id: 'polish-legal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/polish-legal.csl',
  },
  {
    label:
      'Politeknik Negeri Manado - Jurnal Pusat Penelitian dan Pengabdian Kepada Masyarakat (Bahasa Indonesia)',
    id: 'politeknik-negeri-manado-jurnal-p3m',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/politeknik-negeri-manado-jurnal-p3m.csl',
  },
  {
    label: 'Political Studies',
    id: 'political-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/political-studies.csl',
  },
  {
    label: 'Politique Européenne',
    id: 'politique-europeenne',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/politique-europeenne.csl',
  },
  {
    label: 'Politische Vierteljahresschrift (Deutsch)',
    id: 'politische-vierteljahresschrift',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/politische-vierteljahresschrift.csl',
  },
  {
    label: 'Politix (Français)',
    id: 'politix',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/politix.csl',
  },
  {
    label: 'Polygraphia (Italiano)',
    id: 'polygraphia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/polygraphia.csl',
  },
  {
    label: 'Polymer Reviews',
    id: 'polymer-reviews',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/polymer-reviews.csl',
  },
  {
    label: 'Pontifical Athenaeum Regina Apostolorum',
    id: 'pontifical-athenaeum-regina-apostolorum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pontifical-athenaeum-regina-apostolorum.csl',
  },
  {
    label: 'Pontifical Biblical Institute',
    id: 'pontifical-biblical-institute',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pontifical-biblical-institute.csl',
  },
  {
    label: 'Pontifical Gregorian University (Italiano)',
    id: 'pontifical-gregorian-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pontifical-gregorian-university.csl',
  },
  {
    label: 'Population, Space and Place',
    id: 'population-space-and-place',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/population-space-and-place.csl',
  },
  {
    label: 'Population (Français)',
    id: 'population',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/population.csl',
  },
  {
    label: 'Postępy Higieny i Medycyny Doświadczalnej (Polski)',
    id: 'postepy-higieny-i-medycyny-doswiadczalnej',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/postepy-higieny-i-medycyny-doswiadczalnej.csl',
  },
  {
    label: 'Poultry Science',
    id: 'poultry-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/poultry-science.csl',
  },
  {
    label: 'Pour Réussir de Dionne 6ème édition (note, Français - Canada)',
    id: 'pour-reussir-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pour-reussir-note.csl',
  },
  {
    label: 'Právník (Čeština)',
    id: 'pravnik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pravnik.csl',
  },
  {
    label: 'Praxis (Deutsch - Schweiz)',
    id: 'praxis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/praxis.csl',
  },
  {
    label: 'Préhistoires méditerranéennes',
    id: 'prehistoires-mediterraneennes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/prehistoires-mediterraneennes.csl',
  },
  {
    label: 'Prehospital Emergency Care',
    id: 'prehospital-emergency-care',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/prehospital-emergency-care.csl',
  },
  {
    label: 'Preslia - The Journal of the Czech Botanical Society',
    id: 'preslia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/preslia.csl',
  },
  {
    label: 'Presses universitaires de Paris Nanterre (note, Français)',
    id: 'presses-universitaires-de-paris-nanterre',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/presses-universitaires-de-paris-nanterre.csl',
  },
  {
    label:
      'Presses Universitaires de Rennes - Archéologie et Culture (Français)',
    id: 'presses-universitaires-de-rennes-archeologie-et-culture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/presses-universitaires-de-rennes-archeologie-et-culture.csl',
  },
  {
    label: 'Presses Universitaires de Rennes (Français)',
    id: 'presses-universitaires-de-rennes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/presses-universitaires-de-rennes.csl',
  },
  {
    label: 'Presses universitaires de Strasbourg (note, Français)',
    id: 'presses-universitaires-de-strasbourg-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/presses-universitaires-de-strasbourg-note.csl',
  },
  {
    label: 'Primary Care: Clinics in Office Practice',
    id: 'primary-care-clinics-in-office-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/primary-care-clinics-in-office-practice.csl',
  },
  {
    label: 'Proceedings of the Estonian Academy of Sciences (author-date)',
    id: 'proceedings-of-the-estonian-academy-of-sciences-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proceedings-of-the-estonian-academy-of-sciences-author-date.csl',
  },
  {
    label: 'Proceedings of the Estonian Academy of Sciences (numeric)',
    id: 'proceedings-of-the-estonian-academy-of-sciences-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proceedings-of-the-estonian-academy-of-sciences-numeric.csl',
  },
  {
    label:
      'Proceedings of the Joint International Grassland & International Rangeland Congress 2021',
    id: 'proceedings-of-the-joint-international-grassland-and-international-rangeland-congress-2021',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proceedings-of-the-joint-international-grassland-and-international-rangeland-congress-2021.csl',
  },
  {
    label: 'Proceedings of the Royal Society B',
    id: 'proceedings-of-the-royal-society-b',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proceedings-of-the-royal-society-b.csl',
  },
  {
    label: 'Processing and Application of Ceramics',
    id: 'processing-and-application-of-ceramics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/processing-and-application-of-ceramics.csl',
  },
  {
    label: 'Production and Operations Management',
    id: 'production-and-operations-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/production-and-operations-management.csl',
  },
  {
    label: 'ProInflow (note, Čeština)',
    id: 'proinflow',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proinflow.csl',
  },
  {
    label: 'Protein Engineering Design and Selection',
    id: 'protein-engineering-design-and-selection',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/protein-engineering-design-and-selection.csl',
  },
  {
    label: 'Protein Science',
    id: 'protein-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/protein-science.csl',
  },
  {
    label: 'PROTEOMICS',
    id: 'proteomics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/proteomics.csl',
  },
  {
    label: 'Psychiatric Clinics of North America',
    id: 'psychiatric-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychiatric-clinics-of-north-america.csl',
  },
  {
    label: 'Psychiatric Services',
    id: 'psychiatric-services',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychiatric-services.csl',
  },
  {
    label: 'Psychiatry and Clinical Neurosciences',
    id: 'psychiatry-and-clinical-neurosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychiatry-and-clinical-neurosciences.csl',
  },
  {
    label: 'Psychological Medicine',
    id: 'psychological-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychological-medicine.csl',
  },
  {
    label: 'Psychosomatic Medicine',
    id: 'psychosomatic-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychosomatic-medicine.csl',
  },
  {
    label: 'Psychosomatics',
    id: 'psychosomatics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/psychosomatics.csl',
  },
  {
    label: 'Public Health Nutrition',
    id: 'public-health-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/public-health-nutrition.csl',
  },
  {
    label: 'Publicatiewijzer voor de Archeologie (Nederlands)',
    id: 'publicatiewijzer-voor-de-archeologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/publicatiewijzer-voor-de-archeologie.csl',
  },
  {
    label: 'Pure and Applied Geophysics',
    id: 'pure-and-applied-geophysics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/pure-and-applied-geophysics.csl',
  },
  {
    label: 'Qeios',
    id: 'qeios',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/qeios.csl',
  },
  {
    label: 'Quaderni degli Avogadro Colloquia',
    id: 'quaderni-degli-avogadro-colloquia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/quaderni-degli-avogadro-colloquia.csl',
  },
  {
    label: 'Quaderni Materialisti (Italiano)',
    id: 'quaderni-materialisti',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/quaderni-materialisti.csl',
  },
  {
    label: 'Quaderni (Italiano)',
    id: 'quaderni',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/quaderni.csl',
  },
  {
    label: 'Quaternaire (Français)',
    id: 'quaternaire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/quaternaire.csl',
  },
  {
    label: 'Quaternary International',
    id: 'quaternary-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/quaternary-international.csl',
  },
  {
    label: 'Queen Margaret University - Harvard',
    id: 'queen-margaret-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/queen-margaret-university-harvard.csl',
  },
  {
    label: 'R&D Management',
    id: 'r-and-d-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/r-and-d-management.csl',
  },
  {
    label: 'Radiation Protection Dosimetry',
    id: 'radiation-protection-dosimetry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiation-protection-dosimetry.csl',
  },
  {
    label: 'Radiochimica Acta',
    id: 'radiochimica-acta',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiochimica-acta.csl',
  },
  {
    label: 'RadioGraphics',
    id: 'radiographics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiographics.csl',
  },
  {
    label: 'Radiography',
    id: 'radiography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiography.csl',
  },
  {
    label: 'Radiologic Clinics of North America',
    id: 'radiologic-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiologic-clinics-of-north-america.csl',
  },
  {
    label: 'Radiology',
    id: 'radiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiology.csl',
  },
  {
    label: 'Radiopaedia.org',
    id: 'radiopaedia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/radiopaedia.csl',
  },
  {
    label: 'Raffles Bulletin of Zoology',
    id: 'raffles-bulletin-of-zoology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/raffles-bulletin-of-zoology.csl',
  },
  {
    label: 'Raptor Journal',
    id: 'raptor-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/raptor-journal.csl',
  },
  {
    label:
      'Rassegna degli Archivi di Stato (bibliografia generale o ragionata commentata, sorted chronological, italiano)',
    id: 'rassegna-degli-archivi-di-stato-bibliografia-generale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rassegna-degli-archivi-di-stato-bibliografia-generale.csl',
  },
  {
    label: 'Rassegna degli Archivi di Stato (citazioni estese, italiano)',
    id: 'rassegna-degli-archivi-di-stato',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rassegna-degli-archivi-di-stato.csl',
  },
  {
    label: 'Recent Patents on Drug Delivery & Formulation',
    id: 'recent-patents-on-drug-delivery-and-formulation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/recent-patents-on-drug-delivery-and-formulation.csl',
  },
  {
    label: 'Recherches en Sciences de Gestion (Français)',
    id: 'recherches-en-sciences-de-gestion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/recherches-en-sciences-de-gestion.csl',
  },
  {
    label: 'Refugee Survey Quarterly',
    id: 'refugee-survey-quarterly',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/refugee-survey-quarterly.csl',
  },
  {
    label: 'Register Studies',
    id: 'register-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/register-studies.csl',
  },
  {
    label: 'Religion in the Roman Empire',
    id: 'religion-in-the-roman-empire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/religion-in-the-roman-empire.csl',
  },
  {
    label: 'Renewable Agriculture and Food Systems',
    id: 'renewable-agriculture-and-food-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/renewable-agriculture-and-food-systems.csl',
  },
  {
    label: 'Reports of Practical Oncology and Radiotherapy',
    id: 'reports-of-practical-oncology-and-radiotherapy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/reports-of-practical-oncology-and-radiotherapy.csl',
  },
  {
    label: 'Representation',
    id: 'representation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/representation.csl',
  },
  {
    label: 'Reproduction, Fertility and Development',
    id: 'reproduction-fertility-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/reproduction-fertility-and-development.csl',
  },
  {
    label: 'Reproduction',
    id: 'reproduction',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/reproduction.csl',
  },
  {
    label: 'Research and Education Promotion Association',
    id: 'research-and-education-promotion-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/research-and-education-promotion-association.csl',
  },
  {
    label: 'Research in Plant Disease',
    id: 'research-in-plant-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/research-in-plant-disease.csl',
  },
  {
    label:
      'Research Institute for Nature and Forest (Instituut voor Natuur- en Bosonderzoek)',
    id: 'research-institute-for-nature-and-forest',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/research-institute-for-nature-and-forest.csl',
  },
  {
    label: 'Research on Biomedical Engineering',
    id: 'research-on-biomedical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/research-on-biomedical-engineering.csl',
  },
  {
    label: 'Respiratory Care Journal',
    id: 'respiratory-care-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/respiratory-care-journal.csl',
  },
  {
    label: 'Restoration Ecology',
    id: 'restoration-ecology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/restoration-ecology.csl',
  },
  {
    label: 'Retina',
    id: 'retina',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/retina.csl',
  },
  {
    label: 'REVER - Revista de Estudos da Religião',
    id: 'rever-revista-de-estudos-da-religiao',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rever-revista-de-estudos-da-religiao.csl',
  },
  {
    label: 'Review of International Studies',
    id: 'review-of-international-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/review-of-international-studies.csl',
  },
  {
    label: 'Review of Political Economy',
    id: 'review-of-political-economy',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/review-of-political-economy.csl',
  },
  {
    label: 'Reviews of Modern Physics (with titles)',
    id: 'reviews-of-modern-physics-with-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/reviews-of-modern-physics-with-titles.csl',
  },
  {
    label: 'Revista Argentina de Antropologia Biologica (Español)',
    id: 'revista-argentina-de-antropologia-biologica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-argentina-de-antropologia-biologica.csl',
  },
  {
    label: 'Revista Bíblica (Español)',
    id: 'revista-biblica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-biblica.csl',
  },
  {
    label: 'Revista Brasileira de Ciência do Solo',
    id: 'revista-brasileira-de-ciencia-do-solo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-brasileira-de-ciencia-do-solo.csl',
  },
  {
    label: 'Revista Chilena de Derecho y Tecnología (Español - Chile)',
    id: 'revista-chilena-de-derecho-y-tecnologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-chilena-de-derecho-y-tecnologia.csl',
  },
  {
    label: 'Revista Ciencias Técnicas Agropecuarias (Español)',
    id: 'revista-ciencias-tecnicas-agropecuarias',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-ciencias-tecnicas-agropecuarias.csl',
  },
  {
    label: 'Revista Cubana de Meteorologia',
    id: 'revista-cubana-de-meteorologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-cubana-de-meteorologia.csl',
  },
  {
    label: 'Revista da Sociedade Brasileira de Medicina Tropical',
    id: 'revista-da-sociedade-brasileira-de-medicina-tropical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-da-sociedade-brasileira-de-medicina-tropical.csl',
  },
  {
    label: 'Revista de Biología Marina y Oceanografía',
    id: 'revista-de-biologia-marina-y-oceanografia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-de-biologia-marina-y-oceanografia.csl',
  },
  {
    label:
      'Revista de Biología Tropical (International Journal of Tropical Biology and Conservation)',
    id: 'revista-de-biologia-tropical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-de-biologia-tropical.csl',
  },
  {
    label: 'Revista de Filología Española (Español)',
    id: 'revista-de-filologia-espanola',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-de-filologia-espanola.csl',
  },
  {
    label: 'Revista do Instituto de Medicina Tropical de São Paulo',
    id: 'revista-do-instituto-de-medicina-tropical-de-sao-paulo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-do-instituto-de-medicina-tropical-de-sao-paulo.csl',
  },
  {
    label: 'Revista Espanola de Nutricion Humana y Dietetica (Español)',
    id: 'revista-espanola-de-nutricion-humana-y-dietetica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-espanola-de-nutricion-humana-y-dietetica.csl',
  },
  {
    label: 'Revista FAVE - Sección Ciencias Agrarias (Español)',
    id: 'revista-fave-seccion-ciencias-agrarias',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-fave-seccion-ciencias-agrarias.csl',
  },
  {
    label: 'Revista Ladinia',
    id: 'revista-ladinia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-ladinia.csl',
  },
  {
    label: 'Revista Latinoamericana de Metalurgia y Materiales',
    id: 'revista-latinoamericana-de-metalurgia-y-materiales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-latinoamericana-de-metalurgia-y-materiales.csl',
  },
  {
    label: 'Revista Latinoamericana de Recursos Naturales',
    id: 'revista-latinoamericana-de-recursos-naturales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-latinoamericana-de-recursos-naturales.csl',
  },
  {
    label: 'Revista Matéria',
    id: 'revista-materia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-materia.csl',
  },
  {
    label: 'Revista Nóesis',
    id: 'revista-noesis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-noesis.csl',
  },
  {
    label: 'Revista Peruana de Medicina Experimental y Salud Pública (Español)',
    id: 'revista-peruana-de-medicina-experimental-y-salud-publica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-peruana-de-medicina-experimental-y-salud-publica.csl',
  },
  {
    label: 'Revista Portuguesa de Arqueologia',
    id: 'revista-portuguesa-de-arqueologia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-portuguesa-de-arqueologia.csl',
  },
  {
    label: 'Revista Virtual de Química (Português - Brasil)',
    id: 'revista-virtual-de-quimica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revista-virtual-de-quimica.csl',
  },
  {
    label: 'Revue archéologique de l’Est (Français)',
    id: 'revue-archeologique-de-lest',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-archeologique-de-lest.csl',
  },
  {
    label: 'Revue archéologique de Narbonnaise (French)',
    id: 'revue-archeologique-de-narbonnaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-archeologique-de-narbonnaise.csl',
  },
  {
    label: 'Revue archéologique du Centre de la France (Français)',
    id: 'revue-archeologique-du-centre-de-la-france',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-archeologique-du-centre-de-la-france.csl',
  },
  {
    label: 'Revue Archéologique (Français)',
    id: 'revue-archeologique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-archeologique.csl',
  },
  {
    label:
      "Revue d'élevage et de médecine vétérinaire des pays tropicaux (Français)",
    id: 'revue-d-elevage-et-de-medecine-veterinaire-des-pays-tropicaux',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-d-elevage-et-de-medecine-veterinaire-des-pays-tropicaux.csl',
  },
  {
    label: 'Revue de Médecine Vétérinaire (Français)',
    id: 'revue-de-medecine-veterinaire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-de-medecine-veterinaire.csl',
  },
  {
    label: 'Revue de Qumrân',
    id: 'revue-de-qumran',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-de-qumran.csl',
  },
  {
    label: 'Revue des Études Byzantines',
    id: 'revue-des-etudes-byzantines',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-des-etudes-byzantines.csl',
  },
  {
    label: "Revue des Nouvelles Technologies de l'Information (Français)",
    id: 'revue-des-nouvelles-technologies-de-l-information',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-des-nouvelles-technologies-de-l-information.csl',
  },
  {
    label: "Revue d'histoire des sciences humaines (Français)",
    id: 'revue-dhistoire-des-sciences-humaines',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-dhistoire-des-sciences-humaines.csl',
  },
  {
    label: "Revue d'histoire moderne et contemporaine (Français)",
    id: 'revue-dhistoire-moderne-et-contemporaine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-dhistoire-moderne-et-contemporaine.csl',
  },
  {
    label: 'Revue Européenne des Migrations Internationales',
    id: 'revue-europeenne-des-migrations-internationales',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-europeenne-des-migrations-internationales.csl',
  },
  {
    label: 'Revue forestière française (Français)',
    id: 'revue-forestiere-francaise',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-forestiere-francaise.csl',
  },
  {
    label: "Revue française d'administration publique (Français)",
    id: 'revue-francaise-d-administration-publique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-francaise-d-administration-publique.csl',
  },
  {
    label: 'Revue française de gestion (Français)',
    id: 'revue-francaise-de-gestion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-francaise-de-gestion.csl',
  },
  {
    label: 'Revue française de sociologie (Français)',
    id: 'revue-francaise-de-sociologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-francaise-de-sociologie.csl',
  },
  {
    label: "Revue Internationale d'Urbanisme (Français)",
    id: 'revue-internationale-durbanisme',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/revue-internationale-durbanisme.csl',
  },
  {
    label: 'Rhinology',
    id: 'rhinology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rhinology.csl',
  },
  {
    label: 'Rhodora',
    id: 'rhodora',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rhodora.csl',
  },
  {
    label: 'Risk Analysis',
    id: 'risk-analysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/risk-analysis.csl',
  },
  {
    label: 'Ritið: tímarit Hugvísindastofnunar (Íslenska)',
    id: 'ritid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ritid.csl',
  },
  {
    label: 'Rivista Italiana di Paleontologia e Stratigrafia',
    id: 'rivista-italiana-di-paleontologia-e-stratigrafia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rivista-italiana-di-paleontologia-e-stratigrafia.csl',
  },
  {
    label: 'RMIT University - Harvard',
    id: 'rmit-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rmit-university-harvard.csl',
  },
  {
    label:
      'RöFo: Fortschritte auf dem Gebiet der Röntgenstrahlen und bildgebenden Verfahren',
    id: 'rofo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rofo.csl',
  },
  {
    label: 'Romanian Humanities (Română)',
    id: 'romanian-humanities',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/romanian-humanities.csl',
  },
  {
    label: 'ROSE School',
    id: 'rose-school',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rose-school.csl',
  },
  {
    label: 'Российский физиологический журнал им. И.М. Сеченова (Ру́сский)',
    id: 'rossiiskii-fiziologicheskii-zhurnal-imeni-i-m-sechenova',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rossiiskii-fiziologicheskii-zhurnal-imeni-i-m-sechenova.csl',
  },
  {
    label: 'Royal College of Nursing - Harvard',
    id: 'royal-college-of-nursing-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/royal-college-of-nursing-harvard.csl',
  },
  {
    label: 'Royal Society of Chemistry (with titles)',
    id: 'royal-society-of-chemistry-with-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/royal-society-of-chemistry-with-titles.csl',
  },
  {
    label: 'Royal Society of Chemistry',
    id: 'royal-society-of-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/royal-society-of-chemistry.csl',
  },
  {
    label: 'RTF Scan',
    id: 'rtf-scan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/rtf-scan.csl',
  },
  {
    label:
      'Ruhr-Universität Bochum - Lehrstuhl für Industrial Sales and Service Engineering',
    id: 'ruhr-universitat-bochum-lehrstuhl-fur-industrial-sales-and-service-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ruhr-universitat-bochum-lehrstuhl-fur-industrial-sales-and-service-engineering.csl',
  },
  {
    label:
      'Ruhr-Universität Bochum - Medizinische Fakultät (numerisch, Deutsch)',
    id: 'ruhr-universitat-bochum-medizinische-fakultat-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ruhr-universitat-bochum-medizinische-fakultat-numeric.csl',
  },
  {
    label: 'SAGE - Harvard',
    id: 'sage-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sage-harvard.csl',
  },
  {
    label: 'SAGE - Vancouver (brackets)',
    id: 'sage-vancouver-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sage-vancouver-brackets.csl',
  },
  {
    label: 'SAGE - Vancouver',
    id: 'sage-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sage-vancouver.csl',
  },
  {
    label: 'Sağlık Bilimleri Üniversitesi',
    id: 'saglik-bilimleri-universitesi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/saglik-bilimleri-universitesi.csl',
  },
  {
    label: 'Saint Paul University - Faculty of Canon Law',
    id: 'saint-paul-university-faculty-of-canon-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/saint-paul-university-faculty-of-canon-law.csl',
  },
  {
    label: 'San Francisco Estuary & Watershed Science',
    id: 'san-francisco-estuary-and-watershed-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/san-francisco-estuary-and-watershed-science.csl',
  },
  {
    label: 'Sanamed',
    id: 'sanamed',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sanamed.csl',
  },
  {
    label: 'Scandinavian Journal of Infectious Diseases',
    id: 'scandinavian-journal-of-infectious-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-journal-of-infectious-diseases.csl',
  },
  {
    label: 'Scandinavian Journal of Information Systems',
    id: 'scandinavian-journal-of-information-systems',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-journal-of-information-systems.csl',
  },
  {
    label: 'Scandinavian Journal of Medicine & Science in Sports',
    id: 'scandinavian-journal-of-medicine-and-science-in-sports',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-journal-of-medicine-and-science-in-sports.csl',
  },
  {
    label: 'Scandinavian Journal of Rheumatology',
    id: 'scandinavian-journal-of-rheumatology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-journal-of-rheumatology.csl',
  },
  {
    label: 'Scandinavian Journal of Work, Environment & Health',
    id: 'scandinavian-journal-of-work-environment-and-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-journal-of-work-environment-and-health.csl',
  },
  {
    label: 'Scandinavian Political Studies',
    id: 'scandinavian-political-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scandinavian-political-studies.csl',
  },
  {
    label: 'Science and Technology for the Built Environment',
    id: 'science-and-technology-for-the-built-environment',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-and-technology-for-the-built-environment.csl',
  },
  {
    label: 'Science China Chemistry',
    id: 'science-china-chemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-china-chemistry.csl',
  },
  {
    label: 'SCIENCE CHINA Earth Sciences',
    id: 'science-china-earth-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-china-earth-sciences.csl',
  },
  {
    label: 'SCIENCE CHINA Life Sciences',
    id: 'science-china-life-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-china-life-sciences.csl',
  },
  {
    label: 'SCIENCE CHINA Materials',
    id: 'science-china-materials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-china-materials.csl',
  },
  {
    label: 'Science Translational Medicine',
    id: 'science-translational-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-translational-medicine.csl',
  },
  {
    label: 'Science (without titles)',
    id: 'science-without-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science-without-titles.csl',
  },
  {
    label: 'Science',
    id: 'science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/science.csl',
  },
  {
    label: 'ScienceAsia',
    id: 'scienceasia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scienceasia.csl',
  },
  {
    label: 'Sciences Po - Ecole de la recherche (author-date, Français)',
    id: 'sciences-po-ecole-doctorale-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sciences-po-ecole-doctorale-author-date.csl',
  },
  {
    label: 'Sciences Po - École de la recherche (note, Français)',
    id: 'sciences-po-ecole-doctorale-note-french',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sciences-po-ecole-doctorale-note-french.csl',
  },
  {
    label: 'Scientia Agriculturae Bohemica',
    id: 'scientia-agriculturae-bohemica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scientia-agriculturae-bohemica.csl',
  },
  {
    label: 'Scientia Iranica',
    id: 'scientia-iranica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scientia-iranica.csl',
  },
  {
    label: 'Scientific Online Letters on the Atmosphere',
    id: 'scientific-online-letters-on-the-atmosphere',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scientific-online-letters-on-the-atmosphere.csl',
  },
  {
    label:
      'Scientific Review Engineering and Environmental Sciences (Przegląd Naukowy Inżynieria i Kształtowanie Środowiska)',
    id: 'scientific-review-engineering-and-environmental-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scientific-review-engineering-and-environmental-sciences.csl',
  },
  {
    label: 'Scrinium',
    id: 'scrinium',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/scrinium.csl',
  },
  {
    label: 'Sedimentology',
    id: 'sedimentology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sedimentology.csl',
  },
  {
    label: 'Seed Science and Technology',
    id: 'seed-science-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/seed-science-and-technology.csl',
  },
  {
    label: 'Seed Science Research',
    id: 'seed-science-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/seed-science-research.csl',
  },
  {
    label: 'Seismological Research Letters',
    id: 'seismological-research-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/seismological-research-letters.csl',
  },
  {
    label:
      'Sekolah Tinggi Meteorologi Klimatologi dan Geofisika (Bahasa Indonesia)',
    id: 'sekolah-tinggi-meteorologi-klimatologi-dan-geofisika',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sekolah-tinggi-meteorologi-klimatologi-dan-geofisika.csl',
  },
  {
    label: 'Séminaire Saint-Sulpice - Ecole Théologie (Français)',
    id: 'seminaire-saint-sulpice-ecole-theologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/seminaire-saint-sulpice-ecole-theologie.csl',
  },
  {
    label: 'Seminars in Pediatric Neurology',
    id: 'seminars-in-pediatric-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/seminars-in-pediatric-neurology.csl',
  },
  {
    label: 'Vancouver - Serbian Archives of Medicine',
    id: 'serbian-archives-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/serbian-archives-of-medicine.csl',
  },
  {
    label: 'Serdica Journal of Computing',
    id: 'serdica-journal-of-computing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/serdica-journal-of-computing.csl',
  },
  {
    label: "Service Médical de l'Assurance Maladie (Français)",
    id: 'service-medical-de-l-assurance-maladie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/service-medical-de-l-assurance-maladie.csl',
  },
  {
    label: 'Sexual Development',
    id: 'sexual-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sexual-development.csl',
  },
  {
    label: 'Sexual Health',
    id: 'sexual-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sexual-health.csl',
  },
  {
    label: 'Sheffield Hallam University - History',
    id: 'sheffield-hallam-university-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sheffield-hallam-university-history.csl',
  },
  {
    label: 'Shock',
    id: 'shock',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/shock.csl',
  },
  {
    label: 'Silva Fennica',
    id: 'silva-fennica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/silva-fennica.csl',
  },
  {
    label: 'Sinergie Italian Journal of Management',
    id: 'sinergie-italian-journal-of-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sinergie-italian-journal-of-management.csl',
  },
  {
    label: 'SIST02 (日本語)',
    id: 'sist02',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sist02.csl',
  },
  {
    label: 'Skenè. Journal of Theatre and Drama Studies',
    id: 'skene-journal-of-theatre-and-drama-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/skene-journal-of-theatre-and-drama-studies.csl',
  },
  {
    label: 'Slovensko društvo za medicinsko informatiko',
    id: 'slovensko-drustvo-za-medicinsko-informatiko',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/slovensko-drustvo-za-medicinsko-informatiko.csl',
  },
  {
    label: 'Small',
    id: 'small',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/small.csl',
  },
  {
    label: 'Smithsonian Institution Scholarly Press (author-date)',
    id: 'smithsonian-institution-scholarly-press-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/smithsonian-institution-scholarly-press-author-date.csl',
  },
  {
    label: 'Smithsonian Institution Scholarly Press - Botany (author-date)',
    id: 'smithsonian-institution-scholarly-press-botany',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/smithsonian-institution-scholarly-press-botany.csl',
  },
  {
    label: 'Smithsonian Institution Scholarly Press (note)',
    id: 'smithsonian-institution-scholarly-press-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/smithsonian-institution-scholarly-press-note.csl',
  },
  {
    label: 'Smyrna Tıp Dergisi (Türkçe)',
    id: 'smyrna-tip-dergisi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/smyrna-tip-dergisi.csl',
  },
  {
    label: 'SN Computer Science',
    id: 'sn-computer-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sn-computer-science.csl',
  },
  {
    label: 'Social Anthropology/Anthropologie Sociale',
    id: 'social-anthropology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/social-anthropology.csl',
  },
  {
    label: 'Social Cognitive and Affective Neuroscience',
    id: 'social-cognitive-and-affective-neuroscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/social-cognitive-and-affective-neuroscience.csl',
  },
  {
    label: 'Social Science History',
    id: 'social-science-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/social-science-history.csl',
  },
  {
    label: 'Sociedade Brasileira de Computação',
    id: 'sociedade-brasileira-de-computacao',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sociedade-brasileira-de-computacao.csl',
  },
  {
    label: 'Société Archéologique de Bordeaux (Français)',
    id: 'societe-archeologique-de-bordeaux',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/societe-archeologique-de-bordeaux.csl',
  },
  {
    label:
      'Société Française d’Étude de la Céramique Antique en Gaule (Français)',
    id: 'societe-francaise-detude-de-la-ceramique-antique-en-gaule',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/societe-francaise-detude-de-la-ceramique-antique-en-gaule.csl',
  },
  {
    label:
      'Société Nationale des Groupements Techniques Vétérinaires (Français)',
    id: 'societe-nationale-des-groupements-techniques-veterinaires',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/societe-nationale-des-groupements-techniques-veterinaires.csl',
  },
  {
    label: 'Sociétés Contemporaines',
    id: 'societes-contemporaines',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/societes-contemporaines.csl',
  },
  {
    label: 'Society for American Archaeology',
    id: 'society-for-american-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-for-american-archaeology.csl',
  },
  {
    label: 'Society for Historical Archaeology',
    id: 'society-for-historical-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-for-historical-archaeology.csl',
  },
  {
    label: 'Society for Laboratory Automation and Screening',
    id: 'society-for-laboratory-automation-and-screening',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-for-laboratory-automation-and-screening.csl',
  },
  {
    label: 'Society of Automotive Engineers Technical Papers (numeric)',
    id: 'society-of-automotive-engineers-technical-papers-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-of-automotive-engineers-technical-papers-numeric.csl',
  },
  {
    label: 'Society of Biblical Literature 1st edition (full note)',
    id: 'society-of-biblical-literature-1st-edition-fullnote-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-of-biblical-literature-1st-edition-fullnote-bibliography.csl',
  },
  {
    label: 'Society of Biblical Literature 2nd edition (author-date)',
    id: 'society-of-biblical-literature-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-of-biblical-literature-author-date.csl',
  },
  {
    label: 'Society of Biblical Literature 2nd edition (full note)',
    id: 'society-of-biblical-literature-fullnote-bibliography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/society-of-biblical-literature-fullnote-bibliography.csl',
  },
  {
    label: 'Socio-Economic Review',
    id: 'socio-economic-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/socio-economic-review.csl',
  },
  {
    label: 'Sociologia Ruralis',
    id: 'sociologia-ruralis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sociologia-ruralis.csl',
  },
  {
    label: 'Sociologia Urbana e Rurale (Italian)',
    id: 'sociologia-urbana-e-rurale',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sociologia-urbana-e-rurale.csl',
  },
  {
    label: 'Sociology of Health & Illness',
    id: 'sociology-of-health-and-illness',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sociology-of-health-and-illness.csl',
  },
  {
    label: 'Södertörns högskola - Harvard (with Ibid.)',
    id: 'sodertorns-hogskola-harvard-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sodertorns-hogskola-harvard-ibid.csl',
  },
  {
    label: 'Södertörns högskola - Harvard',
    id: 'sodertorns-hogskola-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sodertorns-hogskola-harvard.csl',
  },
  {
    label: 'Södertörns högskola - Oxford',
    id: 'sodertorns-hogskola-oxford',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sodertorns-hogskola-oxford.csl',
  },
  {
    label: 'Soil Biology and Biochemistry',
    id: 'soil-biology-and-biochemistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/soil-biology-and-biochemistry.csl',
  },
  {
    label: 'Soil Science and Plant Nutrition',
    id: 'soil-science-and-plant-nutrition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/soil-science-and-plant-nutrition.csl',
  },
  {
    label: 'Solent University - Harvard',
    id: 'solent-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/solent-university-harvard.csl',
  },
  {
    label: 'Solutions',
    id: 'solutions',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/solutions.csl',
  },
  {
    label:
      'Sorbonne Student Law Review - Revue juridique des étudiants de la Sorbonne',
    id: 'sorbonne-student-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sorbonne-student-law-review.csl',
  },
  {
    label: 'South African Actuarial Journal',
    id: 'south-african-actuarial-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-actuarial-journal.csl',
  },
  {
    label: 'South African Journal of Animal Science',
    id: 'south-african-journal-of-animal-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-journal-of-animal-science.csl',
  },
  {
    label: 'South African Journal of Enology and Viticulture',
    id: 'south-african-journal-of-enology-and-viticulture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-journal-of-enology-and-viticulture.csl',
  },
  {
    label: 'South African Journal of Geology',
    id: 'south-african-journal-of-geology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-journal-of-geology.csl',
  },
  {
    label: 'South African Law Journal',
    id: 'south-african-law-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-law-journal.csl',
  },
  {
    label: 'South African Medical Journal',
    id: 'south-african-medical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-medical-journal.csl',
  },
  {
    label: 'South African Theological Seminary',
    id: 'south-african-theological-seminary',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/south-african-theological-seminary.csl',
  },
  {
    label: 'Southeastern Geographer',
    id: 'southeastern-geographer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/southeastern-geographer.csl',
  },
  {
    label: 'Southern African Journal of Critical Care',
    id: 'southern-african-journal-of-critical-care',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/southern-african-journal-of-critical-care.csl',
  },
  {
    label: 'Soziale Welt (Deutsch)',
    id: 'soziale-welt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/soziale-welt.csl',
  },
  {
    label: 'Sozialpädagogisches Institut Berlin - Walter May (Deutsch)',
    id: 'sozialpadagogisches-institut-berlin-walter-may',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sozialpadagogisches-institut-berlin-walter-may.csl',
  },
  {
    label: 'Sozialwissenschaften (Heilmann) (Deutsch)',
    id: 'sozialwissenschaften-heilmann',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sozialwissenschaften-heilmann.csl',
  },
  {
    label: 'Soziologie (Deutsch)',
    id: 'soziologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/soziologie.csl',
  },
  {
    label: 'Soziologiemagazin (Deutsch)',
    id: 'soziologiemagazin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/soziologiemagazin.csl',
  },
  {
    label: 'Spandidos Publications',
    id: 'spandidos-publications',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spandidos-publications.csl',
  },
  {
    label: 'Spanish Legal (Español)',
    id: 'spanish-legal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spanish-legal.csl',
  },
  {
    label: 'Spectroscopy Letters',
    id: 'spectroscopy-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spectroscopy-letters.csl',
  },
  {
    label: 'Speculum',
    id: 'speculum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/speculum.csl',
  },
  {
    label: 'SPIE BiOS',
    id: 'spie-bios',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spie-bios.csl',
  },
  {
    label: 'SPIE journals',
    id: 'spie-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spie-journals.csl',
  },
  {
    label: 'SPIE Conference Proceedings',
    id: 'spie-proceedings',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spie-proceedings.csl',
  },
  {
    label: 'Spine',
    id: 'spine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spine.csl',
  },
  {
    label: 'SPIP - Cite plugin',
    id: 'spip-cite',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/spip-cite.csl',
  },
  {
    label: 'Sports Health',
    id: 'sports-health',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sports-health.csl',
  },
  {
    label: 'Springer - Basic (author-date, no "et al.", with issue numbers)',
    id: 'springer-basic-author-date-no-et-al-with-issue',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-author-date-no-et-al-with-issue.csl',
  },
  {
    label: 'Springer - Basic (author-date, no "et al.")',
    id: 'springer-basic-author-date-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-author-date-no-et-al.csl',
  },
  {
    label: 'Springer - Basic (author-date)',
    id: 'springer-basic-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-author-date.csl',
  },
  {
    label: 'Springer - Basic (numeric, brackets, no "et al.", alphabetical)',
    id: 'springer-basic-brackets-no-et-al-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-brackets-no-et-al-alphabetical.csl',
  },
  {
    label: 'Springer - Basic (numeric, brackets, no "et al.")',
    id: 'springer-basic-brackets-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-brackets-no-et-al.csl',
  },
  {
    label: 'Springer - Basic (numeric, brackets)',
    id: 'springer-basic-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-brackets.csl',
  },
  {
    label: 'Springer - Basic (note)',
    id: 'springer-basic-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-basic-note.csl',
  },
  {
    label: 'Springer - Fachzeitschriften Medizin Psychologie (Deutsch)',
    id: 'springer-fachzeitschriften-medizin-psychologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-fachzeitschriften-medizin-psychologie.csl',
  },
  {
    label: 'Springer - Humanities (author-date)',
    id: 'springer-humanities-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-humanities-author-date.csl',
  },
  {
    label: 'Springer - Humanities (numeric, brackets)',
    id: 'springer-humanities-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-humanities-brackets.csl',
  },
  {
    label: 'Springer - IMIS Series Migrationsgesellschaften',
    id: 'springer-imis-series-migrationsgesellschaften',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-imis-series-migrationsgesellschaften.csl',
  },
  {
    label:
      'Springer - Lecture Notes in Computer Science (sorted alphabetically)',
    id: 'springer-lecture-notes-in-computer-science-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-lecture-notes-in-computer-science-alphabetical.csl',
  },
  {
    label: 'Springer - Lecture Notes in Computer Science',
    id: 'springer-lecture-notes-in-computer-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-lecture-notes-in-computer-science.csl',
  },
  {
    label: 'Springer - MathPhys (author-date)',
    id: 'springer-mathphys-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-mathphys-author-date.csl',
  },
  {
    label: 'Springer - MathPhys (numeric, brackets)',
    id: 'springer-mathphys-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-mathphys-brackets.csl',
  },
  {
    label: 'Springer - Physics (author-date)',
    id: 'springer-physics-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-physics-author-date.csl',
  },
  {
    label: 'Springer - Physics (numeric, brackets)',
    id: 'springer-physics-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-physics-brackets.csl',
  },
  {
    label: 'Springer - SocPsych (author-date)',
    id: 'springer-socpsych-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-socpsych-author-date.csl',
  },
  {
    label: 'Springer - SocPsych (numeric, brackets)',
    id: 'springer-socpsych-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-socpsych-brackets.csl',
  },
  {
    label: 'Springer - Vancouver (author-date)',
    id: 'springer-vancouver-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-vancouver-author-date.csl',
  },
  {
    label: 'Springer - Vancouver (brackets)',
    id: 'springer-vancouver-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-vancouver-brackets.csl',
  },
  {
    label: 'Springer - Vancouver',
    id: 'springer-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-vancouver.csl',
  },
  {
    label: 'Springer VS (author-date, Deutsch)',
    id: 'springer-vs-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springer-vs-author-date.csl',
  },
  {
    label: 'SpringerProtocols',
    id: 'springerprotocols',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/springerprotocols.csl',
  },
  {
    label: "St Patrick's College",
    id: 'st-patricks-college',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/st-patricks-college.csl',
  },
  {
    label: 'Stanovništvo',
    id: 'stanovnistvo',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stanovnistvo.csl',
  },
  {
    label: 'Statistika: Statistics and Economy Journal',
    id: 'statistika-statistics-and-economy-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/statistika-statistics-and-economy-journal.csl',
  },
  {
    label: 'Stavební obzor (Čeština)',
    id: 'stavebni-obzor',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stavebni-obzor.csl',
  },
  {
    label: 'Steel Research International',
    id: 'steel-research-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/steel-research-international.csl',
  },
  {
    label: 'Steinbeis-Hochschule - School of Management & Innovation (Deutsch)',
    id: 'steinbeis-hochschule-school-of-management-and-innovation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/steinbeis-hochschule-school-of-management-and-innovation.csl',
  },
  {
    label: 'Stellenbosch Law Review',
    id: 'stellenbosch-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stellenbosch-law-review.csl',
  },
  {
    label: 'Stem Cell Reports',
    id: 'stem-cell-reports',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stem-cell-reports.csl',
  },
  {
    label: 'Stem Cells',
    id: 'stem-cells',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stem-cells.csl',
  },
  {
    label: 'Strategic Design Research Journal',
    id: 'strategic-design-research-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/strategic-design-research-journal.csl',
  },
  {
    label: 'Strategic Entrepreneurship Journal',
    id: 'strategic-entrepreneurship-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/strategic-entrepreneurship-journal.csl',
  },
  {
    label: 'Strategic Management Journal',
    id: 'strategic-management-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/strategic-management-journal.csl',
  },
  {
    label: 'Stroke',
    id: 'stroke',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stroke.csl',
  },
  {
    label: 'Structural Control and Health Monitoring',
    id: 'structural-control-and-health-monitoring',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/structural-control-and-health-monitoring.csl',
  },
  {
    label: 'Studi e materiali di storia delle religioni (Italiano)',
    id: 'studi-e-materiali-di-storia-delle-religioni',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/studi-e-materiali-di-storia-delle-religioni.csl',
  },
  {
    label: 'Studi Slavistici Rivista dell’Associazione Italiana degli Slavisti',
    id: 'studi-slavistici-rivista-dellassociazione-italiana-degli-slavisti',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/studi-slavistici-rivista-dellassociazione-italiana-degli-slavisti.csl',
  },
  {
    label: 'Studia BAS (Polski)',
    id: 'studia-bas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/studia-bas.csl',
  },
  {
    label: 'Studies in the History of Gardens & Designed Landscapes',
    id: 'studies-in-the-history-of-gardens-and-designed-landscapes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/studies-in-the-history-of-gardens-and-designed-landscapes.csl',
  },
  {
    label: 'Studii Teologice',
    id: 'studii-teologice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/studii-teologice.csl',
  },
  {
    label: 'Hochschule der Medien Stuttgart (Deutsch)',
    id: 'stuttgart-media-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/stuttgart-media-university.csl',
  },
  {
    label: 'Style Manual - Australian Government (note)',
    id: 'style-manual-australian-government-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/style-manual-australian-government-note.csl',
  },
  {
    label: 'Style Manual - Australian Government (author-date)',
    id: 'style-manual-australian-government',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/style-manual-australian-government.csl',
  },
  {
    label:
      'Style manual for authors, editors and printers 6th edition (Snooks & Co.) (author-date)',
    id: 'style-manual-for-authors-editors-and-printers-6th-edition-snooks-co',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/style-manual-for-authors-editors-and-printers-6th-edition-snooks-co.csl',
  },
  {
    label: 'sub\\urban - Zeitschrift für kritische Stadtforschung (Deutsch)',
    id: 'suburban-zeitschrift-fur-kritische-stadtforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/suburban-zeitschrift-fur-kritische-stadtforschung.csl',
  },
  {
    label: 'Sunway College Johor Bahru - Harvard',
    id: 'sunway-college-johor-bahru',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sunway-college-johor-bahru.csl',
  },
  {
    label: 'Suomen antropologi: Journal of the Finnish Anthropological Society',
    id: 'suomen-antropologi-journal-of-the-finnish-anthropological-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/suomen-antropologi-journal-of-the-finnish-anthropological-society.csl',
  },
  {
    label: 'Surgical Clinics of North America',
    id: 'surgical-clinics-of-north-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/surgical-clinics-of-north-america.csl',
  },
  {
    label: 'Surgical Neurology International',
    id: 'surgical-neurology-international',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/surgical-neurology-international.csl',
  },
  {
    label: 'Surgical Pathology Clinics',
    id: 'surgical-pathology-clinics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/surgical-pathology-clinics.csl',
  },
  {
    label: 'Survey of Ophthalmology',
    id: 'survey-of-ophthalmology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/survey-of-ophthalmology.csl',
  },
  {
    label: 'Svensk exegetisk årsbok (full note)',
    id: 'svensk-exegetisk-arsbok',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/svensk-exegetisk-arsbok.csl',
  },
  {
    label: 'Swedish Legal (Svenska)',
    id: 'swedish-legal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/swedish-legal.csl',
  },
  {
    label: 'Swiss Political Science Review',
    id: 'swiss-political-science-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/swiss-political-science-review.csl',
  },
  {
    label: 'Sylwan (Polski)',
    id: 'sylwan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/sylwan.csl',
  },
  {
    label: 'Synthesis',
    id: 'synthesis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/synthesis.csl',
  },
  {
    label: 'System Dynamics Review',
    id: 'system-dynamics-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/system-dynamics-review.csl',
  },
  {
    label: 'Systematic and Applied Microbiology',
    id: 'systematic-and-applied-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/systematic-and-applied-microbiology.csl',
  },
  {
    label: 'Systematic Biology',
    id: 'systematic-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/systematic-biology.csl',
  },
  {
    label: 'Szociológiai Szemle (Magyar)',
    id: 'szociologiai-szemle',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/szociologiai-szemle.csl',
  },
  {
    label: 'Tábula (Español)',
    id: 'tabula',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tabula.csl',
  },
  {
    label:
      'Tagungsberichte der Historischen Kommission für ost- und westpreußische Landesforschung (Deutsch)',
    id: 'tagungsberichte-der-historischen-kommission-fur-ost-und-westpreussische-landesforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tagungsberichte-der-historischen-kommission-fur-ost-und-westpreussische-landesforschung.csl',
  },
  {
    label:
      'TATuP - Zeitschrift für Technikfolgenabschätzung in Theorie und Praxis',
    id: 'tatup-zeitschrift-fur-technikfolgenabschatzung-in-theorie-und-praxis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tatup-zeitschrift-fur-technikfolgenabschatzung-in-theorie-und-praxis.csl',
  },
  {
    label: 'Taxon',
    id: 'taxon',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taxon.csl',
  },
  {
    label: 'Taylor & Francis - American Chemical Society',
    id: 'taylor-and-francis-acs',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-acs.csl',
  },
  {
    label: 'Taylor & Francis - American Institute of Physics',
    id: 'taylor-and-francis-aip',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-aip.csl',
  },
  {
    label: 'Taylor & Francis - AMA',
    id: 'taylor-and-francis-ama',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-ama.csl',
  },
  {
    label: 'Taylor & Francis - Chicago Manual of Style (author-date)',
    id: 'taylor-and-francis-chicago-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-chicago-author-date.csl',
  },
  {
    label: 'Taylor & Francis - US Chicago Manual of Style B (author-date)',
    id: 'taylor-and-francis-chicago-b-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-chicago-b-author-date.csl',
  },
  {
    label: 'Taylor & Francis - Chicago F',
    id: 'taylor-and-francis-chicago-f',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-chicago-f.csl',
  },
  {
    label: 'Taylor & Francis - Council of Science Editors (author-date)',
    id: 'taylor-and-francis-council-of-science-editors-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-council-of-science-editors-author-date.csl',
  },
  {
    label: 'Taylor & Francis - Council of Science Editors (numeric)',
    id: 'taylor-and-francis-council-of-science-editors-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-council-of-science-editors-numeric.csl',
  },
  {
    label: 'Taylor & Francis - Harvard X',
    id: 'taylor-and-francis-harvard-x',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-harvard-x.csl',
  },
  {
    label: 'Taylor & Francis - National Library of Medicine',
    id: 'taylor-and-francis-national-library-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-national-library-of-medicine.csl',
  },
  {
    label: 'Taylor & Francis - Numeric Q',
    id: 'taylor-and-francis-numeric-q',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-numeric-q.csl',
  },
  {
    label: 'Taylor & Francis - Vancouver/National Library of Medicine',
    id: 'taylor-and-francis-vancouver-national-library-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/taylor-and-francis-vancouver-national-library-of-medicine.csl',
  },
  {
    label: 'Techniques&Culture (Français)',
    id: 'techniques-et-culture',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/techniques-et-culture.csl',
  },
  {
    label: 'Technische Universität Dortmund - AG Virtual Machining (Deutsch)',
    id: 'technische-universitat-dortmund-ag-virtual-machining',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dortmund-ag-virtual-machining.csl',
  },
  {
    label:
      'Technische Universität Dresden - Betriebswirtschaftslehre/Logistik (author-date)',
    id: 'technische-universitat-dresden-betriebswirtschaftslehre-logistik-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-betriebswirtschaftslehre-logistik-author-date.csl',
  },
  {
    label:
      'Technische Universität Dresden - Betriebswirtschaftslehre/Marketing (author-date)',
    id: 'technische-universitat-dresden-betriebswirtschaftslehre-marketing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-betriebswirtschaftslehre-marketing.csl',
  },
  {
    label:
      'Technische Universität Dresden - Betriebswirtschaftslehre/Rechnungswesen/Controlling (Deutsch)',
    id: 'technische-universitat-dresden-betriebswirtschaftslehre-rechnungswesen-controlling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-betriebswirtschaftslehre-rechnungswesen-controlling.csl',
  },
  {
    label:
      'Technische Universität Dresden - Erziehungswissenschaften (author-date)',
    id: 'technische-universitat-dresden-erziehungswissenschaften-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-erziehungswissenschaften-author-date.csl',
  },
  {
    label:
      'Technische Universität Dresden - Finanzwirtschaft und Finanzdienstleistungen (author-date, with short titles)',
    id: 'technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-author-date-with-short-titles',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-author-date-with-short-titles.csl',
  },
  {
    label:
      'Technische Universität Dresden - Finanzwirtschaft und Finanzdienstleistungen (author-date)',
    id: 'technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-author-date.csl',
  },
  {
    label:
      'Technische Universität Dresden - Finanzwirtschaft und Finanzdienstleistungen (note)',
    id: 'technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-finanzwirtschaft-und-finanzdienstleistungen-note.csl',
  },
  {
    label:
      'Technische Universität Dresden - Forstwissenschaft (author-date, Deutsch)',
    id: 'technische-universitat-dresden-forstwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-forstwissenschaft.csl',
  },
  {
    label:
      'Technische Universität Dresden - Historische Musikwissenschaft (note, Deutsch)',
    id: 'technische-universitat-dresden-historische-musikwissenschaft-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-historische-musikwissenschaft-note.csl',
  },
  {
    label: 'Technische Universität Dresden - Kunstgeschichte (note, Deutsch)',
    id: 'technische-universitat-dresden-kunstgeschichte-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-kunstgeschichte-note.csl',
  },
  {
    label: 'Technische Universität Dresden - Linguistik (Deutsch)',
    id: 'technische-universitat-dresden-linguistik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-linguistik.csl',
  },
  {
    label:
      'Technische Universität Dresden - Medienwissenschaft und Neuere Deutsche Literatur (note, Deutsch)',
    id: 'technische-universitat-dresden-medienwissenschaft-und-neuere-deutsche-literatur-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-medienwissenschaft-und-neuere-deutsche-literatur-note.csl',
  },
  {
    label:
      'Technische Universität Dresden - Wirtschaftswissenschaften (Deutsch)',
    id: 'technische-universitat-dresden-wirtschaftswissenschaften',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-dresden-wirtschaftswissenschaften.csl',
  },
  {
    label: 'Technische Universität München - Controlling (Deutsch)',
    id: 'technische-universitat-munchen-controlling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-munchen-controlling.csl',
  },
  {
    label: 'Technische Universität München - Unternehmensführung (Deutsch)',
    id: 'technische-universitat-munchen-unternehmensfuhrung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-munchen-unternehmensfuhrung.csl',
  },
  {
    label: 'Technische Universität Wien (dissertation) (Deutsch)',
    id: 'technische-universitat-wien',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/technische-universitat-wien.csl',
  },
  {
    label: 'Teologia Catalunya',
    id: 'teologia-catalunya',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/teologia-catalunya.csl',
  },
  {
    label:
      'Termedia Neuropsychiatria i Neuropsychologia/Neuropsychiatry and Neuropsychology',
    id: 'termedia-neuropsychiatria-i-neuropsychologia-neuropsychiatry-and-neuropsychology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/termedia-neuropsychiatria-i-neuropsychologia-neuropsychiatry-and-neuropsychology.csl',
  },
  {
    label: 'Terra Nova',
    id: 'terra-nova',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/terra-nova.csl',
  },
  {
    label: 'Tetrahedron Letters',
    id: 'tetrahedron-letters',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tetrahedron-letters.csl',
  },
  {
    label: 'Textual Cultures',
    id: 'textual-cultures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/textual-cultures.csl',
  },
  {
    label: 'Textual Practice',
    id: 'textual-practice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/textual-practice.csl',
  },
  {
    label: 'TGM Wien Diplomarbeit (Deutsch)',
    id: 'tgm-wien-diplom',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tgm-wien-diplom.csl',
  },
  {
    label: 'TGM Wien Diplomarbeit ÖNORM (Deutsch - Österreich)',
    id: 'tgm-wien-diplomarbeit-onorm',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tgm-wien-diplomarbeit-onorm.csl',
  },
  {
    label: 'The Accounting Review',
    id: 'the-accounting-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-accounting-review.csl',
  },
  {
    label: 'The American Journal of Bioethics',
    id: 'the-american-journal-of-bioethics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-bioethics.csl',
  },
  {
    label: 'The American Journal of Cardiology',
    id: 'the-american-journal-of-cardiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-cardiology.csl',
  },
  {
    label: 'The American Journal of Dermatopathology',
    id: 'the-american-journal-of-dermatopathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-dermatopathology.csl',
  },
  {
    label: 'The American Journal of Gastroenterology',
    id: 'the-american-journal-of-gastroenterology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-gastroenterology.csl',
  },
  {
    label: 'The American Journal of Geriatric Psychiatry',
    id: 'the-american-journal-of-geriatric-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-geriatric-psychiatry.csl',
  },
  {
    label: 'The American Journal of Pathology',
    id: 'the-american-journal-of-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-pathology.csl',
  },
  {
    label: 'The American Journal of Psychiatry',
    id: 'the-american-journal-of-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-psychiatry.csl',
  },
  {
    label: 'The American Journal of Tropical Medicine and Hygiene',
    id: 'the-american-journal-of-tropical-medicine-and-hygiene',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-journal-of-tropical-medicine-and-hygiene.csl',
  },
  {
    label: 'The American Midland Naturalist',
    id: 'the-american-midland-naturalist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-midland-naturalist.csl',
  },
  {
    label: 'The American Naturalist',
    id: 'the-american-naturalist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-american-naturalist.csl',
  },
  {
    label: 'The Angle Orthodontist',
    id: 'the-angle-orthodontist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-angle-orthodontist.csl',
  },
  {
    label: 'The Astrophysical Journal',
    id: 'the-astrophysical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-astrophysical-journal.csl',
  },
  {
    label: 'The Auk',
    id: 'the-auk',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-auk.csl',
  },
  {
    label: 'The Australian Journal of Agricultural and Resource Economics',
    id: 'the-australian-journal-of-agricultural-and-resource-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-australian-journal-of-agricultural-and-resource-economics.csl',
  },
  {
    label: 'The Biological Bulletin',
    id: 'the-biological-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-biological-bulletin.csl',
  },
  {
    label: 'The Bone & Joint Journal',
    id: 'the-bone-and-joint-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-bone-and-joint-journal.csl',
  },
  {
    label: 'The Botanical Review',
    id: 'the-botanical-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-botanical-review.csl',
  },
  {
    label: 'The Bovine Practitioner',
    id: 'the-bovine-practitioner',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-bovine-practitioner.csl',
  },
  {
    label: 'The British Journal for the Philosophy of Science',
    id: 'the-british-journal-for-the-philosophy-of-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-british-journal-for-the-philosophy-of-science.csl',
  },
  {
    label: 'The British Journal of Cardiology',
    id: 'the-british-journal-of-cardiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-british-journal-of-cardiology.csl',
  },
  {
    label: 'The British Journal of Criminology',
    id: 'the-british-journal-of-criminology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-british-journal-of-criminology.csl',
  },
  {
    label: 'The British Journal of Psychiatry',
    id: 'the-british-journal-of-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-british-journal-of-psychiatry.csl',
  },
  {
    label: 'The British Journal of Sociology',
    id: 'the-british-journal-of-sociology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-british-journal-of-sociology.csl',
  },
  {
    label: 'The Canadian Geographer (Le Géographe canadien)',
    id: 'the-canadian-geographer',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-canadian-geographer.csl',
  },
  {
    label: 'The Canadian Journal of Chemical Engineering',
    id: 'the-canadian-journal-of-chemical-engineering',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-canadian-journal-of-chemical-engineering.csl',
  },
  {
    label: 'The Canadian Journal of Psychiatry',
    id: 'the-canadian-journal-of-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-canadian-journal-of-psychiatry.csl',
  },
  {
    label: 'The Cancer Journal',
    id: 'the-cancer-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-cancer-journal.csl',
  },
  {
    label: 'The Chemical Society of Japan',
    id: 'the-chemical-society-of-japan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-chemical-society-of-japan.csl',
  },
  {
    label: 'The Chinese Journal of International Politics',
    id: 'the-chinese-journal-of-international-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-chinese-journal-of-international-politics.csl',
  },
  {
    label: 'The Company of Biologists',
    id: 'the-company-of-biologists',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-company-of-biologists.csl',
  },
  {
    label: 'The Depositional Record',
    id: 'the-depositional-record',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-depositional-record.csl',
  },
  {
    label: 'The Design Journal',
    id: 'the-design-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-design-journal.csl',
  },
  {
    label: 'The Economic History Review',
    id: 'the-economic-history-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-economic-history-review.csl',
  },
  {
    label: 'The European Research Journal',
    id: 'the-european-research-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-european-research-journal.csl',
  },
  {
    label: 'The FASEB Journal',
    id: 'the-faseb-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-faseb-journal.csl',
  },
  {
    label: 'The FEBS Journal',
    id: 'the-febs-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-febs-journal.csl',
  },
  {
    label: 'The Geological Society of America',
    id: 'the-geological-society-of-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-geological-society-of-america.csl',
  },
  {
    label: 'The Geological Society of London',
    id: 'the-geological-society-of-london',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-geological-society-of-london.csl',
  },
  {
    label: 'The Hastings Center Report',
    id: 'the-hastings-center-report',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-hastings-center-report.csl',
  },
  {
    label: 'The Historical Journal',
    id: 'the-historical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-historical-journal.csl',
  },
  {
    label: 'The Holocene',
    id: 'the-holocene',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-holocene.csl',
  },
  {
    label: 'The Horticulture Journal',
    id: 'the-horticulture-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-horticulture-journal.csl',
  },
  {
    label:
      'The Institute of Electronics, Information and Communication Engineers (電子情報通信学会)',
    id: 'the-institute-of-electronics-information-and-communication-engineers',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-institute-of-electronics-information-and-communication-engineers.csl',
  },
  {
    label: 'The Institution of Engineering and Technology',
    id: 'the-institution-of-engineering-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-institution-of-engineering-and-technology.csl',
  },
  {
    label: 'The International Journal of Developmental Biology',
    id: 'the-international-journal-of-developmental-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-international-journal-of-developmental-biology.csl',
  },
  {
    label: 'The International Journal of Psychoanalysis',
    id: 'the-international-journal-of-psychoanalysis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-international-journal-of-psychoanalysis.csl',
  },
  {
    label: 'The International Journal of Tuberculosis and Lung Disease',
    id: 'the-international-journal-of-tuberculosis-and-lung-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-international-journal-of-tuberculosis-and-lung-disease.csl',
  },
  {
    label: 'The ISME Journal',
    id: 'the-isme-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-isme-journal.csl',
  },
  {
    label: 'The Journal of Adhesive Dentistry',
    id: 'the-journal-of-adhesive-dentistry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-adhesive-dentistry.csl',
  },
  {
    label: 'The Journal of Agricultural Science',
    id: 'the-journal-of-agricultural-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-agricultural-science.csl',
  },
  {
    label: 'The Journal of Clinical Ethics',
    id: 'the-journal-of-clinical-ethics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-clinical-ethics.csl',
  },
  {
    label: 'The Journal of Clinical Investigation',
    id: 'the-journal-of-clinical-investigation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-clinical-investigation.csl',
  },
  {
    label: 'The Journal of Comparative Law',
    id: 'the-journal-of-comparative-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-comparative-law.csl',
  },
  {
    label: 'The Journal of Comparative Neurology',
    id: 'the-journal-of-comparative-neurology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-comparative-neurology.csl',
  },
  {
    label: 'The Journal of Egyptian Archaeology',
    id: 'the-journal-of-egyptian-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-egyptian-archaeology.csl',
  },
  {
    label: 'The Journal of Eukaryotic Microbiology',
    id: 'the-journal-of-eukaryotic-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-eukaryotic-microbiology.csl',
  },
  {
    label: 'The Journal of Foot & Ankle Surgery',
    id: 'the-journal-of-foot-and-ankle-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-foot-and-ankle-surgery.csl',
  },
  {
    label: 'The Journal of Hand Surgery Asian-Pacific Volume',
    id: 'the-journal-of-hand-surgery-asian-pacific-volume',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-hand-surgery-asian-pacific-volume.csl',
  },
  {
    label: 'The Journal of Hand Surgery (European Volume)',
    id: 'the-journal-of-hand-surgery-european-volume',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-hand-surgery-european-volume.csl',
  },
  {
    label: 'The Journal of Hellenic Studies',
    id: 'the-journal-of-hellenic-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-hellenic-studies.csl',
  },
  {
    label: 'The Journal of Immunology',
    id: 'the-journal-of-immunology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-immunology.csl',
  },
  {
    label: 'The Journal of Infection in Developing Countries',
    id: 'the-journal-of-infection-in-developing-countries',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-infection-in-developing-countries.csl',
  },
  {
    label: 'The Journal of Juristic Papyrology',
    id: 'the-journal-of-juristic-papyrology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-juristic-papyrology.csl',
  },
  {
    label: 'The Journal of Laryngology & Otology',
    id: 'the-journal-of-laryngology-and-otology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-laryngology-and-otology.csl',
  },
  {
    label: 'The Journal of Modern History',
    id: 'the-journal-of-modern-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-modern-history.csl',
  },
  {
    label: 'The Journal of Molecular Diagnostics',
    id: 'the-journal-of-molecular-diagnostics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-molecular-diagnostics.csl',
  },
  {
    label: 'The Journal of Nervous and Mental Disease',
    id: 'the-journal-of-nervous-and-mental-disease',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-nervous-and-mental-disease.csl',
  },
  {
    label: 'The Journal of Neuropsychiatry and Clinical Neurosciences',
    id: 'the-journal-of-neuropsychiatry-and-clinical-neurosciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-neuropsychiatry-and-clinical-neurosciences.csl',
  },
  {
    label: 'The Journal of Neuroscience',
    id: 'the-journal-of-neuroscience',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-neuroscience.csl',
  },
  {
    label: 'The Journal of Nuclear Medicine',
    id: 'the-journal-of-nuclear-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-nuclear-medicine.csl',
  },
  {
    label: 'The Journal of Nutrition, Health & Aging',
    id: 'the-journal-of-nutrition-health-and-aging',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-nutrition-health-and-aging.csl',
  },
  {
    label: 'The Journal of Pain',
    id: 'the-journal-of-pain',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-pain.csl',
  },
  {
    label: 'The Journal of Parasitology',
    id: 'the-journal-of-parasitology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-parasitology.csl',
  },
  {
    label: 'The Journal of Pathology',
    id: 'the-journal-of-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-pathology.csl',
  },
  {
    label: 'The Journal of Peasant Studies',
    id: 'the-journal-of-peasant-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-peasant-studies.csl',
  },
  {
    label: 'The Journal of Physiology',
    id: 'the-journal-of-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-physiology.csl',
  },
  {
    label: 'The Journal of Pure and Applied Chemistry Research',
    id: 'the-journal-of-pure-and-applied-chemistry-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-pure-and-applied-chemistry-research.csl',
  },
  {
    label: 'The Journal of Roman Studies',
    id: 'the-journal-of-roman-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-roman-studies.csl',
  },
  {
    label: 'The Journal of the Acoustical Society of America (numeric)',
    id: 'the-journal-of-the-acoustical-society-of-america-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-the-acoustical-society-of-america-numeric.csl',
  },
  {
    label: 'The Journal of the Acoustical Society of America (author-date)',
    id: 'the-journal-of-the-acoustical-society-of-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-the-acoustical-society-of-america.csl',
  },
  {
    label: 'The Journal of the Torrey Botanical Society',
    id: 'the-journal-of-the-torrey-botanical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-the-torrey-botanical-society.csl',
  },
  {
    label: 'The Journal of Transport History',
    id: 'the-journal-of-transport-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-transport-history.csl',
  },
  {
    label: 'The Journal of Trauma and Acute Care Surgery',
    id: 'the-journal-of-trauma-and-acute-care-surgery',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-trauma-and-acute-care-surgery.csl',
  },
  {
    label: 'The Journal of Urology',
    id: 'the-journal-of-urology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-urology.csl',
  },
  {
    label: 'The Journal of Veterinary Medical Science',
    id: 'the-journal-of-veterinary-medical-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-veterinary-medical-science.csl',
  },
  {
    label: 'The Journal of Wildlife Management',
    id: 'the-journal-of-wildlife-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journal-of-wildlife-management.csl',
  },
  {
    label:
      'The Journals of Gerontology, Series A: Biological Sciences and Medical Sciences',
    id: 'the-journals-of-gerontology-series-a',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-journals-of-gerontology-series-a.csl',
  },
  {
    label: 'The Korean Journal of Gastroenterology',
    id: 'the-korean-journal-of-gastroenterology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-korean-journal-of-gastroenterology.csl',
  },
  {
    label: 'The Korean Journal of Internal Medicine',
    id: 'the-korean-journal-of-internal-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-korean-journal-of-internal-medicine.csl',
  },
  {
    label: 'The Korean Journal of Mycology',
    id: 'the-korean-journal-of-mycology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-korean-journal-of-mycology.csl',
  },
  {
    label: 'The Lancet',
    id: 'the-lancet',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-lancet.csl',
  },
  {
    label: 'The Lichenologist',
    id: 'the-lichenologist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-lichenologist.csl',
  },
  {
    label: 'The National Medical Journal of India',
    id: 'the-national-medical-journal-of-india',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-national-medical-journal-of-india.csl',
  },
  {
    label: 'The Neuroscientist',
    id: 'the-neuroscientist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-neuroscientist.csl',
  },
  {
    label: 'The New England Journal of Medicine',
    id: 'the-new-england-journal-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-new-england-journal-of-medicine.csl',
  },
  {
    label: 'The Oncologist',
    id: 'the-oncologist',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-oncologist.csl',
  },
  {
    label: 'The Open University - A251 - Arts Course',
    id: 'the-open-university-a251',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-a251.csl',
  },
  {
    label: 'The Open University - Harvard',
    id: 'the-open-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-harvard.csl',
  },
  {
    label: 'The Open University - M801 - Research Project and Dissertation',
    id: 'the-open-university-m801',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-m801.csl',
  },
  {
    label: 'The Open University (numeric, superscript)',
    id: 'the-open-university-numeric-superscript',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-numeric-superscript.csl',
  },
  {
    label: 'The Open University (numeric)',
    id: 'the-open-university-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-numeric.csl',
  },
  {
    label: 'The Open University - S390',
    id: 'the-open-university-s390',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-open-university-s390.csl',
  },
  {
    label: 'The Optical Society',
    id: 'the-optical-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-optical-society.csl',
  },
  {
    label: 'The Pan African Medical Journal',
    id: 'the-pan-african-medical-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-pan-african-medical-journal.csl',
  },
  {
    label: 'The Plant Cell',
    id: 'the-plant-cell',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-plant-cell.csl',
  },
  {
    label: 'The Plant Genome',
    id: 'the-plant-genome',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-plant-genome.csl',
  },
  {
    label: 'The Plant Journal',
    id: 'the-plant-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-plant-journal.csl',
  },
  {
    label: 'The Quarterly Journal of Economics',
    id: 'the-quarterly-journal-of-economics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-quarterly-journal-of-economics.csl',
  },
  {
    label: 'The Review of Financial Studies',
    id: 'the-review-of-financial-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-review-of-financial-studies.csl',
  },
  {
    label: 'The Rockefeller University Press',
    id: 'the-rockefeller-university-press',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-rockefeller-university-press.csl',
  },
  {
    label: 'The Saudi Journal for Dental Research',
    id: 'the-saudi-journal-for-dental-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-saudi-journal-for-dental-research.csl',
  },
  {
    label: 'The Scandinavian Journal of Clinical & Laboratory Investigation',
    id: 'the-scandinavian-journal-of-clinical-and-laboratory-investigation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-scandinavian-journal-of-clinical-and-laboratory-investigation.csl',
  },
  {
    label:
      '東京大学法科大学院ローレビュー (The University of Tokyo Law Review) (日本語)',
    id: 'the-university-of-tokyo-law-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-university-of-tokyo-law-review.csl',
  },
  {
    label: 'The University of Western Australia - Harvard',
    id: 'the-university-of-western-australia-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-university-of-western-australia-harvard.csl',
  },
  {
    label: 'The University of Winchester - Harvard',
    id: 'the-university-of-winchester-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-university-of-winchester-harvard.csl',
  },
  {
    label: 'The World Journal of Biological Psychiatry',
    id: 'the-world-journal-of-biological-psychiatry',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/the-world-journal-of-biological-psychiatry.csl',
  },
  {
    label: 'Theologie und Philosophie (Deutsch)',
    id: 'theologie-und-philosophie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/theologie-und-philosophie.csl',
  },
  {
    label: 'Theory, Culture & Society',
    id: 'theory-culture-and-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/theory-culture-and-society.csl',
  },
  {
    label: 'Theranostics',
    id: 'theranostics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/theranostics.csl',
  },
  {
    label:
      'Thèse de Sorbonne Université (Sciences Humaines et Sociales, Français)',
    id: 'theses-de-sorbonne-universite',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/theses-de-sorbonne-universite.csl',
  },
  {
    label: 'Thieme-German (Deutsch)',
    id: 'thieme-german',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/thieme-german.csl',
  },
  {
    label: 'Thomson Reuters - Legal, Tax & Accounting Australia',
    id: 'thomson-reuters-legal-tax-and-accounting-australia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/thomson-reuters-legal-tax-and-accounting-australia.csl',
  },
  {
    label: 'Thrombosis and Haemostasis',
    id: 'thrombosis-and-haemostasis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/thrombosis-and-haemostasis.csl',
  },
  {
    label: 'Tijdschrift voor economische en sociale geografie',
    id: 'tijdschrift-voor-economische-en-sociale-geografie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tijdschrift-voor-economische-en-sociale-geografie.csl',
  },
  {
    label: 'Tijdschrift voor Geneeskunde en Gezondheidszorg (Nederlands)',
    id: 'tijdschrift-voor-geneeskunde',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tijdschrift-voor-geneeskunde.csl',
  },
  {
    label: 'Topoi Orient-Occident (auteur-date, Français)',
    id: 'topoi-orient-occident-auteur-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/topoi-orient-occident-auteur-date.csl',
  },
  {
    label: 'Topoi Orient-Occident (classique, Français)',
    id: 'topoi-orient-occident-classique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/topoi-orient-occident-classique.csl',
  },
  {
    label: 'Toxicological Sciences',
    id: 'toxicological-sciences',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/toxicological-sciences.csl',
  },
  {
    label: 'Trabajos de Prehistoria (Español)',
    id: 'trabajos-de-prehistoria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/trabajos-de-prehistoria.csl',
  },
  {
    label: 'Tracés: Revue de Sciences Humaines (Français)',
    id: 'traces',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/traces.csl',
  },
  {
    label: 'Traffic Injury Prevention',
    id: 'traffic-injury-prevention',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/traffic-injury-prevention.csl',
  },
  {
    label: 'Traffic',
    id: 'traffic',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/traffic.csl',
  },
  {
    label: 'Trames',
    id: 'trames',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/trames.csl',
  },
  {
    label: 'Transactions of the American Philological Association',
    id: 'transactions-of-the-american-philological-association',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transactions-of-the-american-philological-association.csl',
  },
  {
    label: 'Transactions of the Materials Research Society of Japan',
    id: 'transactions-of-the-materials-research-society-of-japan',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transactions-of-the-materials-research-society-of-japan.csl',
  },
  {
    label: 'Transboundary and Emerging Diseases',
    id: 'transboundary-and-emerging-diseases',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transboundary-and-emerging-diseases.csl',
  },
  {
    label: 'Transnational Environmental Law',
    id: 'transnational-environmental-law',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transnational-environmental-law.csl',
  },
  {
    label: 'Transplantation',
    id: 'transplantation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transplantation.csl',
  },
  {
    label: 'Transport',
    id: 'transport',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transport.csl',
  },
  {
    label:
      'Transportation Research Record: Journal of the Transportation Research Board',
    id: 'transportation-research-record',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transportation-research-record.csl',
  },
  {
    label: 'Transposition. Musique et sciences sociales',
    id: 'transposition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transposition.csl',
  },
  {
    label: 'Transversalités (Français)',
    id: 'transversalites',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/transversalites.csl',
  },
  {
    label: 'Travail et Emploi (Français)',
    id: 'travail-et-emploi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/travail-et-emploi.csl',
  },
  {
    label: 'Tree Physiology',
    id: 'tree-physiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tree-physiology.csl',
  },
  {
    label: 'Trends in Glycoscience and Glycotechnology',
    id: 'trends-in-glycoscience-and-glycotechnology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/trends-in-glycoscience-and-glycotechnology.csl',
  },
  {
    label: 'Trends journals',
    id: 'trends-journals',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/trends-journals.csl',
  },
  {
    label: 'Triangle (Français)',
    id: 'triangle',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/triangle.csl',
  },
  {
    label:
      'Trinity College Dublin - Zoology Botany Environmental Sciences - Harvard',
    id: 'trinity-college-dublin-zoology-botany-environmental-sciences-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/trinity-college-dublin-zoology-botany-environmental-sciences-harvard.csl',
  },
  {
    label: 'Tropical Animal Health and Production',
    id: 'tropical-animal-health-and-production',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tropical-animal-health-and-production.csl',
  },
  {
    label: 'Tsaqafah',
    id: 'tsaqafah',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tsaqafah.csl',
  },
  {
    label: 'Turabian 9th edition (author-date)',
    id: 'turabian-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/turabian-author-date.csl',
  },
  {
    label: 'Turabian 8th edition (full note)',
    id: 'turabian-fullnote-bibliography-8th-edition',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/turabian-fullnote-bibliography-8th-edition.csl',
  },
  {
    label: 'Turabian 8th edition (full note, no ibid)',
    id: 'turabian-fullnote-bibliography-no-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/turabian-fullnote-bibliography-no-ibid.csl',
  },
  {
    label: 'Turcica',
    id: 'turcica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/turcica.csl',
  },
  {
    label: 'TÜBİTAK (Türkiye Bilimsel ve Teknolojik Araştırma Kurumu) (Türkçe)',
    id: 'turkiye-bilimsel-ve-teknolojik-arastirma-kurumu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/turkiye-bilimsel-ve-teknolojik-arastirma-kurumu.csl',
  },
  {
    label: 'Twentieth-Century Music',
    id: 'twentieth-century-music',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/twentieth-century-music.csl',
  },
  {
    label: 'Tyndale Bulletin',
    id: 'tyndale-bulletin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/tyndale-bulletin.csl',
  },
  {
    label: 'U Schyłku Starożytności (Polski)',
    id: 'u-schylku-starozytnosci',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/u-schylku-starozytnosci.csl',
  },
  {
    label: 'UCL Institute of Education - Harvard',
    id: 'ucl-institute-of-education-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ucl-institute-of-education-harvard.csl',
  },
  {
    label: 'UCL University College - APA (Dansk)',
    id: 'ucl-university-college-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ucl-university-college-apa.csl',
  },
  {
    label: 'UCL University College - Harvard (Dansk)',
    id: 'ucl-university-college-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ucl-university-college-harvard.csl',
  },
  {
    label: 'UCL University College - Vancouver (English)',
    id: 'ucl-university-college-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ucl-university-college-vancouver.csl',
  },
  {
    label:
      'UCLouvain - Centre Charles De Visscher pour le droit international et européen (French)',
    id: 'uclouvain-centre-charles-de-visscher-pour-le-droit-international-et-europeen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uclouvain-centre-charles-de-visscher-pour-le-droit-international-et-europeen.csl',
  },
  {
    label: 'Ugeskrift for Læger (Dansk)',
    id: 'ugeskrift-for-laeger',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ugeskrift-for-laeger.csl',
  },
  {
    label: 'Ultrasound in Medicine and Biology',
    id: 'ultrasound-in-medicine-and-biology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ultrasound-in-medicine-and-biology.csl',
  },
  {
    label: 'Ulúa. Revista de Historia, Sociedad y Cultura',
    id: 'ulua-revista-de-historia-sociedad-y-cultura',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/ulua-revista-de-historia-sociedad-y-cultura.csl',
  },
  {
    label:
      'Uludağ Üniversitesi - Sosyal Bilimler Enstitüsü (author-date, Türkçe)',
    id: 'uludag-universitesi-sosyal-bilimler-enstitusu-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uludag-universitesi-sosyal-bilimler-enstitusu-author-date.csl',
  },
  {
    label:
      'Uludağ Üniversitesi - Sosyal Bilimler Enstitüsü (full note, with Ibid., Türkçe)',
    id: 'uludag-universitesi-sosyal-bilimler-enstitusu-full-note-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uludag-universitesi-sosyal-bilimler-enstitusu-full-note-with-ibid.csl',
  },
  {
    label:
      'Uludağ Üniversitesi - Sosyal Bilimler Enstitüsü (full note, Türkçe)',
    id: 'uludag-universitesi-sosyal-bilimler-enstitusu-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uludag-universitesi-sosyal-bilimler-enstitusu-full-note.csl',
  },
  {
    label:
      'Uludağ Üniversitesi - Sosyal Bilimler Enstitüsü - İlahiyat Fakültesi (full note, with Ibid., Türkçe)',
    id: 'uludag-universitesi-sosyal-bilimler-enstitusu-ilahiyat-fakultesi-full-note-with-ibid',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uludag-universitesi-sosyal-bilimler-enstitusu-ilahiyat-fakultesi-full-note-with-ibid.csl',
  },
  {
    label:
      'Uludağ Üniversitesi - Sosyal Bilimler Enstitüsü - İlahiyat Fakültesi (full note, Türkçe)',
    id: 'uludag-universitesi-sosyal-bilimler-enstitusu-ilahiyat-fakultesi-full-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uludag-universitesi-sosyal-bilimler-enstitusu-ilahiyat-fakultesi-full-note.csl',
  },
  {
    label: 'UNESCO International Institute for Educational Planning',
    id: 'unesco-international-institute-for-educational-planning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/unesco-international-institute-for-educational-planning.csl',
  },
  {
    label: 'Uni Fribourg Theologie (Deutsch)',
    id: 'uni-fribourg-theologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uni-fribourg-theologie.csl',
  },
  {
    label: 'Unified Stylesheet for Linguistics (de Gruyter Literature)',
    id: 'unified-style-sheet-for-linguistics-de-gruyter-literature',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/unified-style-sheet-for-linguistics-de-gruyter-literature.csl',
  },
  {
    label: 'Unified style sheet for linguistics',
    id: 'unified-style-sheet-for-linguistics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/unified-style-sheet-for-linguistics.csl',
  },
  {
    label: 'United Nations Conference on Trade and Development',
    id: 'united-nations-conference-on-trade-and-development',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/united-nations-conference-on-trade-and-development.csl',
  },
  {
    label: 'United Nations Development Programme ICCA Legal Review',
    id: 'united-nations-development-programme-icca-legal-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/united-nations-development-programme-icca-legal-review.csl',
  },
  {
    label: 'United Nations Framework Convention on Climate Change',
    id: 'united-nations-framework-convention-on-climate-change',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/united-nations-framework-convention-on-climate-change.csl',
  },
  {
    label: 'United States International Trade Commission',
    id: 'united-states-international-trade-commission',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/united-states-international-trade-commission.csl',
  },
  {
    label: 'Universidad Autónoma de Ciudad Juárez - Estilo Latino Humanístico',
    id: 'universidad-autonoma-cidudad-juarez-estilo-latino-humanistico',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidad-autonoma-cidudad-juarez-estilo-latino-humanistico.csl',
  },
  {
    label: 'Universidad de León (España) - Harvard',
    id: 'universidad-de-leon-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidad-de-leon-harvard.csl',
  },
  {
    label: 'Universidad Evangélica del Paraguay (Español)',
    id: 'universidad-evangelica-del-paraguay',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidad-evangelica-del-paraguay.csl',
  },
  {
    label:
      'Universidade de São Paulo - Escola de Comunicações e Artes - ABNT (Português - Brasil)',
    id: 'universidade-de-sao-paulo-escola-de-comunicacoes-e-artes-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-de-sao-paulo-escola-de-comunicacoes-e-artes-abnt.csl',
  },
  {
    label: 'Universidade de São Paulo - Instituto de Matemática e Estatística',
    id: 'universidade-de-sao-paulo-instituto-de-matematica-e-estatistica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-de-sao-paulo-instituto-de-matematica-e-estatistica.csl',
  },
  {
    label:
      'Universidade do Estado do Rio de Janeiro - ABNT (Português - Brasil)',
    id: 'universidade-do-estado-do-rio-de-janeiro-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-do-estado-do-rio-de-janeiro-abnt.csl',
  },
  {
    label:
      'Universidade do Porto - Faculdade de Engenharia - Chicago Manual of Style 17th (author-date) (Português - Portugal)',
    id: 'universidade-do-porto-faculdade-de-engenharia-chicago-pt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-do-porto-faculdade-de-engenharia-chicago-pt.csl',
  },
  {
    label:
      'Universidade do Porto - Faculdade de Engenharia - Chicago Manual of Style 17th (author-date)',
    id: 'universidade-do-porto-faculdade-de-engenharia-chicago',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-do-porto-faculdade-de-engenharia-chicago.csl',
  },
  {
    label:
      'Universidade do Porto - Faculdade de Psicologia e de Ciências da Educação - APA',
    id: 'universidade-do-porto-faculdade-de-psicologia-e-de-ciencias-da-educacao',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-do-porto-faculdade-de-psicologia-e-de-ciencias-da-educacao.csl',
  },
  {
    label:
      'Universidade Estadual de Alagoas - UNEAL [ABNT] (Portuguese - Brazil)',
    id: 'universidade-estadual-de-alagoas-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-estadual-de-alagoas-abnt.csl',
  },
  {
    label:
      'Universidade Estadual do Oeste do Paraná - Programa Institucional de Bolsas de Iniciação Científica (Português - Brasil)',
    id: 'universidade-estadual-do-oeste-do-parana-programa-institucional-de-bolsas-de-iniciacao-cientifica',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-estadual-do-oeste-do-parana-programa-institucional-de-bolsas-de-iniciacao-cientifica.csl',
  },
  {
    label:
      'Universidade Estadual Paulista - Campus de Dracena - ABNT (autoria abreviada) (Português - Brasil)',
    id: 'universidade-estadual-paulista-campus-de-dracena-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-estadual-paulista-campus-de-dracena-abnt.csl',
  },
  {
    label:
      'Universidade Estadual Paulista - Faculdade de Engenharia de Guaratingueta - ABNT (Português - Brasil)',
    id: 'universidade-estadual-paulista-faculdade-de-engenharia-de-guaratingueta-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-estadual-paulista-faculdade-de-engenharia-de-guaratingueta-abnt.csl',
  },
  {
    label: 'Universidade Federal de Juiz de Fora (Português - Brasil)',
    id: 'universidade-federal-de-juiz-de-fora',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-de-juiz-de-fora.csl',
  },
  {
    label: 'Universidade Federal de Pernambuco - ABNT (Português - Brasil)',
    id: 'universidade-federal-de-pernambuco-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-de-pernambuco-abnt.csl',
  },
  {
    label:
      'Universidade Federal de Sergipe - Departamento de Engenharia de Produção - ABNT (Português - Brasil)',
    id: 'universidade-federal-de-sergipe-departamento-de-engenharia-de-producao-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-de-sergipe-departamento-de-engenharia-de-producao-abnt.csl',
  },
  {
    label:
      'Universidade Federal do Espírito Santo - ABNT (autoria abreviada) (Português - Brasil)',
    id: 'universidade-federal-do-espirito-santo-abnt-initials',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-do-espirito-santo-abnt-initials.csl',
  },
  {
    label:
      'Universidade Federal do Espírito Santo - ABNT (autoria completa) (Português - Brasil)',
    id: 'universidade-federal-do-espirito-santo-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-do-espirito-santo-abnt.csl',
  },
  {
    label:
      'Universidade Federal do Rio de Janeiro - Instituto Alberto Luiz Coimbra de Pós-Graduação e Pesquisa de Engenharia - ABNT (Português - Brasil)',
    id: 'universidade-federal-do-rio-de-janeiro-instituto-alberto-luiz-coimbra-de-pos-graduacao-e-pesquisa-de-engenharia-abnt',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universidade-federal-do-rio-de-janeiro-instituto-alberto-luiz-coimbra-de-pos-graduacao-e-pesquisa-de-engenharia-abnt.csl',
  },
  {
    label: 'Università Cattolica del Sacro Cuore (note, Italiano)',
    id: 'universita-cattolica-del-sacro-cuore',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universita-cattolica-del-sacro-cuore.csl',
  },
  {
    label:
      'University of Bologna - Liberal Arts College (Università di Bologna - Facoltà di Lettere e Filosofia) (Italiano)',
    id: 'universita-di-bologna-lettere',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universita-di-bologna-lettere.csl',
  },
  {
    label: 'Università Pontificia Salesiana (Italiano)',
    id: 'universita-pontificia-salesiana-it',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universita-pontificia-salesiana-it.csl',
  },
  {
    label: 'Università Pontificia Salesiana',
    id: 'universita-pontificia-salesiana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universita-pontificia-salesiana.csl',
  },
  {
    label: 'Universitas Gadjah Mada - Departemen Sejarah (Bahasa Indonesia)',
    id: 'universitas-gadjah-mada-departemen-sejarah',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitas-gadjah-mada-departemen-sejarah.csl',
  },
  {
    label:
      'Universitas Negeri Semarang - Fakultas Matematika dan Ilmu Pengetahuan Alam (Bahasa Indonesia)',
    id: 'universitas-negeri-semarang-fakultas-matematika-dan-ilmu-pengetahuan-alam',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitas-negeri-semarang-fakultas-matematika-dan-ilmu-pengetahuan-alam.csl',
  },
  {
    label:
      'Universitas Negeri Yogyakarta - Program Pascasarjana (Bahasa Indonesia)',
    id: 'universitas-negeri-yogyakarta-program-pascasarjana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitas-negeri-yogyakarta-program-pascasarjana.csl',
  },
  {
    label: 'Universität Basel - Deutsche Sprachwissenschaft',
    id: 'universitat-basel-deutsche-sprachwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-basel-deutsche-sprachwissenschaft.csl',
  },
  {
    label: 'Universität Basel - Iberoromanistik (Español)',
    id: 'universitat-basel-iberoromanistik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-basel-iberoromanistik.csl',
  },
  {
    label: 'Universität Bern - Institut für Musikwissenschaft (note, Deutsch)',
    id: 'universitat-bern-institut-fur-musikwissenschaft-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-bern-institut-fur-musikwissenschaft-note.csl',
  },
  {
    label:
      'Universität Bern - Institut für Sozialanthropologie (Deutsch - Schweiz)',
    id: 'universitat-bern-institut-fur-sozialanthropologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-bern-institut-fur-sozialanthropologie.csl',
  },
  {
    label: 'Universität Bremen - Institut für Politikwissenschaft (Deutsch)',
    id: 'universitat-bremen-institut-fur-politikwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-bremen-institut-fur-politikwissenschaft.csl',
  },
  {
    label:
      'Universität Bremen - Lehrstuhl für innovatives Markenmanagement (Deutsch)',
    id: 'universitat-bremen-lehrstuhl-fur-innovatives-markenmanagement',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-bremen-lehrstuhl-fur-innovatives-markenmanagement.csl',
  },
  {
    label: 'Albert-Ludwigs-Universität Freiburg - Geschichte (Deutsch)',
    id: 'universitat-freiburg-geschichte',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-freiburg-geschichte.csl',
  },
  {
    label: 'Universität Heidelberg - Historisches Seminar (Deutsch)',
    id: 'universitat-heidelberg-historisches-seminar',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-heidelberg-historisches-seminar.csl',
  },
  {
    label:
      'Universität Heidelberg - Medizinische Fakultät Mannheim (numerisch, Deutsch)',
    id: 'universitat-heidelberg-medizinische-fakultat-mannheim-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-heidelberg-medizinische-fakultat-mannheim-numeric.csl',
  },
  {
    label: 'Universität Mainz - Geographisches Institut (Deutsch)',
    id: 'universitat-mainz-geographisches-institut',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-mainz-geographisches-institut.csl',
  },
  {
    label: 'Universität Mannheim - Germanistische Linguistik (Deutsch)',
    id: 'universitat-mannheim-germanistische-linguistik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-mannheim-germanistische-linguistik.csl',
  },
  {
    label: 'Universität Stuttgart - Planung und Partizipation (Deutsch)',
    id: 'universitat-stuttgart-planung-und-partizipation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-stuttgart-planung-und-partizipation.csl',
  },
  {
    label: 'Universität Wien - Institut für Geschichte',
    id: 'universitat-wien-institut-fur-geschichte',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-wien-institut-fur-geschichte.csl',
  },
  {
    label:
      'Universität zu Köln - Seminar für ABWL und Finanzierungslehre (Deutsch)',
    id: 'universitat-zu-koln-seminar-fur-abwl-und-finanzierungslehre',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitat-zu-koln-seminar-fur-abwl-und-finanzierungslehre.csl',
  },
  {
    label: 'Universitätsmedizin Göttingen (Deutsch)',
    id: 'universitatsmedizin-gottingen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitatsmedizin-gottingen.csl',
  },
  {
    label: 'Université Catholique de Louvain - Histoire (Français)',
    id: 'universite-catholique-de-louvain-histoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-catholique-de-louvain-histoire.csl',
  },
  {
    label:
      "Université Cheikh Anta Diop - Faculté de Médecine de Pharmacie et d'Odontologie (Français)",
    id: 'universite-cheikh-anta-diop-faculte-de-medecine-de-pharmacie-et-dodontologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-cheikh-anta-diop-faculte-de-medecine-de-pharmacie-et-dodontologie.csl',
  },
  {
    label: 'Université de Bordeaux - École doctorale de droit (Français)',
    id: 'universite-de-bordeaux-ecole-doctorale-de-droit',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-bordeaux-ecole-doctorale-de-droit.csl',
  },
  {
    label:
      'Université de Genève - Département de langue et de littérature françaises modernes (Français)',
    id: 'universite-de-geneve-departement-de-langue-et-de-litterature-francaises-modernes',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-geneve-departement-de-langue-et-de-litterature-francaises-modernes.csl',
  },
  {
    label: 'Université de Lausanne - Histoire (Français)',
    id: 'universite-de-lausanne-histoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-lausanne-histoire.csl',
  },
  {
    label: 'Université de Liège - Droit (classement par catégorie, Français)',
    id: 'universite-de-liege-droit-par-categorie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-liege-droit-par-categorie.csl',
  },
  {
    label: 'Université de Liège - Droit (Français)',
    id: 'universite-de-liege-droit',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-liege-droit.csl',
  },
  {
    label: 'Université de Liège - Histoire (Français)',
    id: 'universite-de-liege-histoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-liege-histoire.csl',
  },
  {
    label: 'Université de Montréal - APA (Français - Canada)',
    id: 'universite-de-montreal-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-montreal-apa.csl',
  },
  {
    label: 'Université de Montréal - Faculté de musique (Français - Canada)',
    id: 'universite-de-montreal-faculte-de-musique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-montreal-faculte-de-musique.csl',
  },
  {
    label:
      'Université de Picardie Jules Verne (Amiens) - Thèse de UFR de Médecine',
    id: 'universite-de-picardie-jules-verne-ufr-de-medecine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-picardie-jules-verne-ufr-de-medecine.csl',
  },
  {
    label:
      'Université de Sherbrooke - Département de géomatique (Français - Canada)',
    id: 'universite-de-sherbrooke-departement-de-geomatique',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-sherbrooke-departement-de-geomatique.csl',
  },
  {
    label: "Université de Sherbrooke - Faculté d'éducation (Français - Canada)",
    id: 'universite-de-sherbrooke-faculte-d-education',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-sherbrooke-faculte-d-education.csl',
  },
  {
    label: 'Université de Sherbrooke - Histoire (Français - Canada)',
    id: 'universite-de-sherbrooke-histoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-de-sherbrooke-histoire.csl',
  },
  {
    label:
      'Université du Québec à Montréal - Département d’histoire (Français - Canada)',
    id: 'universite-du-quebec-a-montreal-departement-dhistoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-du-quebec-a-montreal-departement-dhistoire.csl',
  },
  {
    label:
      'Université du Québec à Montréal - Études littéraires et sémiologie (Français - Canada)',
    id: 'universite-du-quebec-a-montreal-etudes-litteraires-et-semiologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-du-quebec-a-montreal-etudes-litteraires-et-semiologie.csl',
  },
  {
    label:
      'Université du Québec à Montréal - APA - prénoms (Français - Canada)',
    id: 'universite-du-quebec-a-montreal-prenoms',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-du-quebec-a-montreal-prenoms.csl',
  },
  {
    label: 'Université du Québec à Montréal - APA (Français - Canada)',
    id: 'universite-du-quebec-a-montreal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-du-quebec-a-montreal.csl',
  },
  {
    label:
      'Université Laval - Département des sciences historiques (Français - Canada)',
    id: 'universite-laval-departement-des-sciences-historiques',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-laval-departement-des-sciences-historiques.csl',
  },
  {
    label:
      "Université Laval - Département d'information et de communication (Français - Canada)",
    id: 'universite-laval-departement-dinformation-et-de-communication',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-laval-departement-dinformation-et-de-communication.csl',
  },
  {
    label:
      'Université Laval - Faculté de théologie et de sciences religieuses (Français - Canada)',
    id: 'universite-laval-faculte-de-theologie-et-de-sciences-religieuses',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-laval-faculte-de-theologie-et-de-sciences-religieuses.csl',
  },
  {
    label: 'Université libre de Bruxelles - Histoire (Français)',
    id: 'universite-libre-de-bruxelles-histoire',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-libre-de-bruxelles-histoire.csl',
  },
  {
    label:
      'Université Nangui Abrogoua - Sciences de la Nature - APA (Français)',
    id: 'universite-nangui-abrogoua-sciences-de-la-nature-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universite-nangui-abrogoua-sciences-de-la-nature-apa.csl',
  },
  {
    label: 'Universiteit Utrecht - Onderzoeksgids Geschiedenis (Nederlands)',
    id: 'universiteit-utrecht-onderzoeksgids-geschiedenis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universiteit-utrecht-onderzoeksgids-geschiedenis.csl',
  },
  {
    label: 'Universitetet i Oslo - Rettsvitenskap (Norsk - Bokmål)',
    id: 'universitetet-i-oslo-rettsvitenskap',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universitetet-i-oslo-rettsvitenskap.csl',
  },
  {
    label: 'Universiti Kebangsaan Malaysia (Malay)',
    id: 'universiti-kebangsaan-malaysia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/universiti-kebangsaan-malaysia.csl',
  },
  {
    label: 'University College Dublin - School of History & Archives',
    id: 'university-college-dublin-school-of-history-and-archives',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-college-dublin-school-of-history-and-archives.csl',
  },
  {
    label: 'University College Lillebælt - APA (Dansk)',
    id: 'university-college-lillebaelt-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-college-lillebaelt-apa.csl',
  },
  {
    label: 'University for the Creative Arts (figures and illustrations)',
    id: 'university-for-the-creative-arts-figures',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-for-the-creative-arts-figures.csl',
  },
  {
    label: 'University of Aberdeen - School of Education - Harvard',
    id: 'university-of-aberdeen-school-of-education-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-aberdeen-school-of-education-harvard.csl',
  },
  {
    label: 'University of Aleppo - Faculty of Medicine',
    id: 'university-of-aleppo-faculty-of-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-aleppo-faculty-of-medicine.csl',
  },
  {
    label: 'University of Auckland - History',
    id: 'university-of-auckland-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-auckland-history.csl',
  },
  {
    label: 'University of Bradford - Harvard',
    id: 'university-of-bradford-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-bradford-harvard.csl',
  },
  {
    label: 'University of Cambridge - Faculty of History',
    id: 'university-of-cambridge-faculty-of-history',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-cambridge-faculty-of-history.csl',
  },
  {
    label: 'University of Gothenburg - APA 7th edition (Swedish legislations)',
    id: 'university-of-gothenburg-apa-7th-edition-swedish-legislations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-gothenburg-apa-7th-edition-swedish-legislations.csl',
  },
  {
    label: 'University of Gothenburg - APA 6th edition (Swedish legislations)',
    id: 'university-of-gothenburg-apa-swedish-legislations',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-gothenburg-apa-swedish-legislations.csl',
  },
  {
    label: 'Helsingin yliopisto - Teologinen tiedekunta (Suomi)',
    id: 'university-of-helsinki-faculty-of-theology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-helsinki-faculty-of-theology.csl',
  },
  {
    label: 'University of Hull Harvard',
    id: 'university-of-hull-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-hull-harvard.csl',
  },
  {
    label: 'University of Lincoln - Harvard',
    id: 'university-of-lincoln-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-lincoln-harvard.csl',
  },
  {
    label: 'University of New England, Australia (note)',
    id: 'university-of-new-england-australia-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-new-england-australia-note.csl',
  },
  {
    label: 'University of Pretoria - Harvard (Theology and Religion)',
    id: 'university-of-pretoria-harvard-theology-religion',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-pretoria-harvard-theology-religion.csl',
  },
  {
    label: 'University of Roehampton - Harvard',
    id: 'university-of-roehampton-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-roehampton-harvard.csl',
  },
  {
    label: 'University of South Africa - Harvard',
    id: 'university-of-south-africa-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-south-africa-harvard.csl',
  },
  {
    label: 'University of South Australia 2017 - Harvard',
    id: 'university-of-south-australia-2017-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-south-australia-2017-harvard.csl',
  },
  {
    label: 'University of South Australia 2011 - Harvard',
    id: 'university-of-south-australia-harvard-2011',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-south-australia-harvard-2011.csl',
  },
  {
    label: 'University of South Australia 2013 - Harvard',
    id: 'university-of-south-australia-harvard-2013',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-south-australia-harvard-2013.csl',
  },
  {
    label: 'University of South Wales - Harvard',
    id: 'university-of-south-wales-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-south-wales-harvard.csl',
  },
  {
    label: 'University of Tasmania - Simplified Author-date',
    id: 'university-of-tasmania-simplified-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-tasmania-simplified-author-date.csl',
  },
  {
    label: 'University of York - APA 6th edition',
    id: 'university-of-york-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-apa.csl',
  },
  {
    label: 'University of York - Chicago Manual of Style 16th edition',
    id: 'university-of-york-chicago',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-chicago.csl',
  },
  {
    label: 'University of York - Harvard - Archaeology',
    id: 'university-of-york-harvard-archaeology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-harvard-archaeology.csl',
  },
  {
    label: 'University of York - Harvard - Environment',
    id: 'university-of-york-harvard-environment',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-harvard-environment.csl',
  },
  {
    label: 'University of York - Harvard',
    id: 'university-of-york-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-harvard.csl',
  },
  {
    label: 'University of York - IEEE',
    id: 'university-of-york-ieee',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-ieee.csl',
  },
  {
    label:
      'University of York - Modern Humanities Research Association 3rd edition',
    id: 'university-of-york-mhra',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-mhra.csl',
  },
  {
    label: 'University of York - Modern Language Association 8th edition',
    id: 'university-of-york-mla',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-mla.csl',
  },
  {
    label: 'University of York - OSCOLA',
    id: 'university-of-york-oscola',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-oscola.csl',
  },
  {
    label: 'University of York - Vancouver',
    id: 'university-of-york-vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-york-vancouver.csl',
  },
  {
    label: 'University of Zabol (فارسی)',
    id: 'university-of-zabol-fa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-zabol-fa.csl',
  },
  {
    label: 'University of Zabol (English)',
    id: 'university-of-zabol',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/university-of-zabol.csl',
  },
  {
    label:
      'Univerza na Primorskem - Fakulteta za vede o zdravju - APA (Slovenščina)',
    id: 'univerza-na-primorskem-fakulteta-za-vede-o-zdravju-apa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/univerza-na-primorskem-fakulteta-za-vede-o-zdravju-apa.csl',
  },
  {
    label:
      'Uniwersytet im. Adama Mickiewicza w Poznaniu - Wydział Anglistyki (English)',
    id: 'uniwersytet-im-adama-mickiewicza-w-poznaniu-wydzial-anglistyki',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uniwersytet-im-adama-mickiewicza-w-poznaniu-wydzial-anglistyki.csl',
  },
  {
    label:
      'Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie (autor-rok, Polski)',
    id: 'uniwersytet-kardynala-stefana-wyszynskiego-w-warszawie-autor-rok',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uniwersytet-kardynala-stefana-wyszynskiego-w-warszawie-autor-rok.csl',
  },
  {
    label:
      'Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie (przypis, Polski)',
    id: 'uniwersytet-kardynala-stefana-wyszynskiego-w-warszawie-przypis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uniwersytet-kardynala-stefana-wyszynskiego-w-warszawie-przypis.csl',
  },
  {
    label: 'Uppsala universitet - Historia',
    id: 'uppsala-universitet-historia',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uppsala-universitet-historia.csl',
  },
  {
    label: 'Uppsala universitet, Institutionen för biologisk grundutbildning',
    id: 'uppsala-universitet-institutionen-for-biologisk-grundutbildning',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uppsala-universitet-institutionen-for-biologisk-grundutbildning.csl',
  },
  {
    label: 'Uppsala University Library - Harvard',
    id: 'uppsala-university-library-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uppsala-university-library-harvard.csl',
  },
  {
    label: 'Urad RS za makroekonomske analize in razvoj (Slovenščina)',
    id: 'urad-rs-za-makroekonomske-analize-in-razvoj',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urad-rs-za-makroekonomske-analize-in-razvoj.csl',
  },
  {
    label: 'Urban Geography',
    id: 'urban-geography',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urban-geography.csl',
  },
  {
    label: 'Urban Habitats',
    id: 'urban-habitats',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urban-habitats.csl',
  },
  {
    label: 'Urban Studies',
    id: 'urban-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urban-studies.csl',
  },
  {
    label: 'Urbani izziv (Urban Challenge) (English)',
    id: 'urbani-izziv-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urbani-izziv-en.csl',
  },
  {
    label: 'Urbani izziv (Urban Challenge) (Slovenščina)',
    id: 'urbani-izziv',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urbani-izziv.csl',
  },
  {
    label: 'Urological Science',
    id: 'urological-science',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/urological-science.csl',
  },
  {
    label: 'U.S. Geological Survey',
    id: 'us-geological-survey',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/us-geological-survey.csl',
  },
  {
    label: 'USDA Forest Service - Pacific Northwest Research Station',
    id: 'usda-forest-service-pacific-northwest-research-station',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/usda-forest-service-pacific-northwest-research-station.csl',
  },
  {
    label: 'User Modeling and User-Adapted Interaction',
    id: 'user-modeling-and-user-adapted-interaction',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/user-modeling-and-user-adapted-interaction.csl',
  },
  {
    label: 'Успехи геронтологии (Ру́сский)',
    id: 'uspekhi-gerontologii',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/uspekhi-gerontologii.csl',
  },
  {
    label: 'Utah Geological Survey',
    id: 'utah-geological-survey',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/utah-geological-survey.csl',
  },
  {
    label:
      'Van Yüzüncü Yıl Üniversitesi Fen Bilimleri Enstitüsü - Tez Yazım Stili (Türkçe)',
    id: 'van-yuzuncu-yil-universitesi-fen-bilimleri-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/van-yuzuncu-yil-universitesi-fen-bilimleri-enstitusu.csl',
  },
  {
    label: 'Vancouver (sorted alphabetically)',
    id: 'vancouver-alphabetical',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-alphabetical.csl',
  },
  {
    label: 'Vancouver (author-date)',
    id: 'vancouver-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-author-date.csl',
  },
  {
    label: 'Vancouver (brackets, no "et al.")',
    id: 'vancouver-brackets-no-et-al',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-brackets-no-et-al.csl',
  },
  {
    label: 'Vancouver (brackets, only year in date, no issue numbers)',
    id: 'vancouver-brackets-only-year-no-issue',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-brackets-only-year-no-issue.csl',
  },
  {
    label: 'Vancouver (brackets)',
    id: 'vancouver-brackets',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-brackets.csl',
  },
  {
    label: 'Vancouver (Français - Canada)',
    id: 'vancouver-fr-ca',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-fr-ca.csl',
  },
  {
    label: 'Imperial College London - Vancouver',
    id: 'vancouver-imperial-college-london',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-imperial-college-london.csl',
  },
  {
    label: 'Vancouver (superscript, brackets, only year in date)',
    id: 'vancouver-superscript-brackets-only-year',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-superscript-brackets-only-year.csl',
  },
  {
    label: 'Vancouver (superscript, only year in date, no issue numbers)',
    id: 'vancouver-superscript-only-year',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-superscript-only-year.csl',
  },
  {
    label: 'Vancouver (superscript)',
    id: 'vancouver-superscript',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver-superscript.csl',
  },
  {
    label: 'Vancouver',
    id: 'vancouver',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vancouver.csl',
  },
  {
    label: 'Veterinaria Italiana',
    id: 'veterinaria-italiana',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinaria-italiana.csl',
  },
  {
    label: 'Veterinary Clinical Pathology',
    id: 'veterinary-clinical-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-clinical-pathology.csl',
  },
  {
    label: 'Veterinary Medicine Austria (Wiener Tierärztliche Monatsschrift)',
    id: 'veterinary-medicine-austria',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-medicine-austria.csl',
  },
  {
    label: 'Veterinary Microbiology',
    id: 'veterinary-microbiology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-microbiology.csl',
  },
  {
    label: 'Veterinary Pathology',
    id: 'veterinary-pathology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-pathology.csl',
  },
  {
    label: 'Veterinary Radiology & Ultrasound',
    id: 'veterinary-radiology-and-ultrasound',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-radiology-and-ultrasound.csl',
  },
  {
    label: 'Veterinary Record Open',
    id: 'veterinary-record-open',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-record-open.csl',
  },
  {
    label: 'Veterinary Record',
    id: 'veterinary-record',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/veterinary-record.csl',
  },
  {
    label: 'Victoria University - Harvard',
    id: 'victoria-university-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/victoria-university-harvard.csl',
  },
  {
    label: 'Vienna Legal',
    id: 'vienna-legal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vienna-legal.csl',
  },
  {
    label: 'Vietnam Ministry of Education and Training (English)',
    id: 'vietnam-ministry-of-education-and-training-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vietnam-ministry-of-education-and-training-en.csl',
  },
  {
    label: 'Vietnam Ministry of Education and Training (Tiếng Việt)',
    id: 'vietnam-ministry-of-education-and-training-vi',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vietnam-ministry-of-education-and-training-vi.csl',
  },
  {
    label: 'Vigiliae Christianae',
    id: 'vigiliae-christianae',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vigiliae-christianae.csl',
  },
  {
    label: 'Vilnius Gediminas Technical University (Lietuvių kalba)',
    id: 'vilnius-gediminas-technical-university',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vilnius-gediminas-technical-university.csl',
  },
  {
    label: "Vingtième Siècle. Revue d'histoire (Français)",
    id: 'vingtieme-siecle',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vingtieme-siecle.csl',
  },
  {
    label: 'Vita Latina (auteurs anciens, Français)',
    id: 'vita-latina-auteurs-anciens',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vita-latina-auteurs-anciens.csl',
  },
  {
    label: 'Vita Latina (Français)',
    id: 'vita-latina',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vita-latina.csl',
  },
  {
    label: 'Vodohospodářské technicko-ekonomické informace (English)',
    id: 'vodohospodarske-technicko-ekonomicke-informace-en',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vodohospodarske-technicko-ekonomicke-informace-en.csl',
  },
  {
    label: 'Vodohospodářské technicko-ekonomické informace (Čeština)',
    id: 'vodohospodarske-technicko-ekonomicke-informace',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vodohospodarske-technicko-ekonomicke-informace.csl',
  },
  {
    label: 'Vox Sanguinis',
    id: 'vox-sanguinis',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/vox-sanguinis.csl',
  },
  {
    label: 'Wader Study',
    id: 'wader-study',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wader-study.csl',
  },
  {
    label: 'Water Alternatives',
    id: 'water-alternatives',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/water-alternatives.csl',
  },
  {
    label: 'Water Environment Research',
    id: 'water-environment-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/water-environment-research.csl',
  },
  {
    label: 'Water SA',
    id: 'water-sa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/water-sa.csl',
  },
  {
    label: 'Water Science & Technology',
    id: 'water-science-and-technology',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/water-science-and-technology.csl',
  },
  {
    label: 'Waterbirds',
    id: 'waterbirds',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/waterbirds.csl',
  },
  {
    label: 'Weed Research',
    id: 'weed-research',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/weed-research.csl',
  },
  {
    label: 'Weed Science Society of America',
    id: 'weed-science-society-of-america',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/weed-science-society-of-america.csl',
  },
  {
    label: 'West European Politics',
    id: 'west-european-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/west-european-politics.csl',
  },
  {
    label: 'Western Journal of Emergency Medicine',
    id: 'western-journal-of-emergency-medicine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/western-journal-of-emergency-medicine.csl',
  },
  {
    label:
      'Westfälische Wilhelms-Universität Münster - Medizinische Fakultät (Deutsch)',
    id: 'westfalische-wilhelms-universitat-munster-medizinische-fakultat',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/westfalische-wilhelms-universitat-munster-medizinische-fakultat.csl',
  },
  {
    label: 'Wetlands',
    id: 'wetlands',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wetlands.csl',
  },
  {
    label: 'Wheaton College - Ph.D. in Biblical and Theological Studies',
    id: 'wheaton-college-phd-in-biblical-and-theological-studies',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wheaton-college-phd-in-biblical-and-theological-studies.csl',
  },
  {
    label: 'WHO Regional Office for Europe - Harvard',
    id: 'who-europe-harvard',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/who-europe-harvard.csl',
  },
  {
    label: 'WHO Regional Office for Europe (numeric)',
    id: 'who-europe-numeric',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/who-europe-numeric.csl',
  },
  {
    label: 'Wiesbaden Business School',
    id: 'wiesbaden-business-school',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wiesbaden-business-school.csl',
  },
  {
    label: 'Wikipedia Templates',
    id: 'wikipedia-templates',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wikipedia-templates.csl',
  },
  {
    label: 'Wiley-VCH books',
    id: 'wiley-vch-books',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wiley-vch-books.csl',
  },
  {
    label: 'Wiley Analytical Science',
    id: 'wiley-was',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wiley-was.csl',
  },
  {
    label: 'Wireless Communications and Mobile Computing',
    id: 'wireless-communications-and-mobile-computing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wireless-communications-and-mobile-computing.csl',
  },
  {
    label:
      'Wirtschaftsuniversität Wien - Abteilung für Bildungswissenschaft (Deutsch - Österreich)',
    id: 'wirtschaftsuniversitat-wien-abteilung-fur-bildungswissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-abteilung-fur-bildungswissenschaft.csl',
  },
  {
    label: 'Wirtschaftsuniversität Wien (author-date)',
    id: 'wirtschaftsuniversitat-wien-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-author-date.csl',
  },
  {
    label:
      'Wirtschaftsuniversität Wien - Handel und Marketing (Deutsch - Österreich)',
    id: 'wirtschaftsuniversitat-wien-handel-und-marketing',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-handel-und-marketing.csl',
  },
  {
    label: 'Wirtschaftsuniversität Wien - Health Care Management',
    id: 'wirtschaftsuniversitat-wien-health-care-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-health-care-management.csl',
  },
  {
    label:
      'Wirtschaftsuniversität Wien - Institut für BWL des Außenhandels (Deutsch - Österreich)',
    id: 'wirtschaftsuniversitat-wien-institut-fur-bwl-des-aussenhandels',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-institut-fur-bwl-des-aussenhandels.csl',
  },
  {
    label:
      'Wirtschaftsuniversität Wien - Institut für Transportwirtschaft und Logistik (Deutsch - Österreich)',
    id: 'wirtschaftsuniversitat-wien-institut-fur-transportwirtschaft-und-logistik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-institut-fur-transportwirtschaft-und-logistik.csl',
  },
  {
    label: 'Wirtschaftsuniversität Wien - Unternehmensrechnung und Controlling',
    id: 'wirtschaftsuniversitat-wien-unternehmensrechnung-und-controlling',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-unternehmensrechnung-und-controlling.csl',
  },
  {
    label:
      'Wirtschaftsuniversität Wien - Wirtschaftspädagogik (Deutsch - Österreich)',
    id: 'wirtschaftsuniversitat-wien-wirtschaftspadagogik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wirtschaftsuniversitat-wien-wirtschaftspadagogik.csl',
  },
  {
    label: 'Wissenschaftlicher Industrielogistik-Dialog (Deutsch - Österreich)',
    id: 'wissenschaftlicher-industrielogistik-dialog',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wissenschaftlicher-industrielogistik-dialog.csl',
  },
  {
    label: 'Wolters Kluwerbrede Schrijfwijzer (author-date, Nederlands)',
    id: 'wolters-kluwerbrede-schrijfwijzer-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/wolters-kluwerbrede-schrijfwijzer-author-date.csl',
  },
  {
    label: 'World Applied Sciences Journal',
    id: 'world-applied-sciences-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/world-applied-sciences-journal.csl',
  },
  {
    label: 'World Congress on Engineering Asset Management 2010',
    id: 'world-congress-on-engineering-asset-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/world-congress-on-engineering-asset-management.csl',
  },
  {
    label: 'World Mycotoxin Journal',
    id: 'world-mycotoxin-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/world-mycotoxin-journal.csl',
  },
  {
    label:
      'World Organisation for Animal Health - Scientific and Technical Review',
    id: 'world-organisation-for-animal-health-scientific-and-technical-review',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/world-organisation-for-animal-health-scientific-and-technical-review.csl',
  },
  {
    label: 'World Politics',
    id: 'world-politics',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/world-politics.csl',
  },
  {
    label: "World's Poultry Science Journal",
    id: 'worlds-poultry-science-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/worlds-poultry-science-journal.csl',
  },
  {
    label: "World's Veterinary Journal",
    id: 'worlds-veterinary-journal',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/worlds-veterinary-journal.csl',
  },
  {
    label: 'Xenotransplantation',
    id: 'xenotransplantation',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/xenotransplantation.csl',
  },
  {
    label: 'Yeast',
    id: 'yeast',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/yeast.csl',
  },
  {
    label: 'Yozgat Bozok Üniversitesi - Fen Bilimleri Enstitüsü (Türkçe)',
    id: 'yozgat-bozok-universitesi-fen-bilimleri-enstitusu',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/yozgat-bozok-universitesi-fen-bilimleri-enstitusu.csl',
  },
  {
    label: 'Zastosowania Komputerów w Elektrotechnice',
    id: 'zastosowania-komputerow-w-elektrotechnice',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zastosowania-komputerow-w-elektrotechnice.csl',
  },
  {
    label:
      'ZDfm – Zeitschrift für Diversitätsforschung und -management (Deutsch - Österreich)',
    id: 'zdfm-zeitschrift-fur-diversitatsforschung-und-management',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zdfm-zeitschrift-fur-diversitatsforschung-und-management.csl',
  },
  {
    label: 'Zdravniški Vestnik (Slovenian Medical Journal)',
    id: 'zdravniski-vestnik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zdravniski-vestnik.csl',
  },
  {
    label: 'Zeitgeschichte (Deutsch)',
    id: 'zeitgeschichte',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitgeschichte.csl',
  },
  {
    label: 'Zeithistorische Forschungen/Studies in Contemporary History',
    id: 'zeithistorische-forschungen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeithistorische-forschungen.csl',
  },
  {
    label: 'Zeitschrift für Allgemeinmedizin',
    id: 'zeitschrift-fur-allgemeinmedizin',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-allgemeinmedizin.csl',
  },
  {
    label:
      'Zeitschrift für Antikes Christentum (Journal of Ancient Christianity) (English)',
    id: 'zeitschrift-fur-antikes-christentum',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-antikes-christentum.csl',
  },
  {
    label: 'Zeitschrift für deutsche Philologie (Deutsch)',
    id: 'zeitschrift-fur-deutsche-philologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-deutsche-philologie.csl',
  },
  {
    label: 'Zeitschrift für die Geschichte des Oberrheins (Deutsch)',
    id: 'zeitschrift-fur-die-geschichte-des-oberrheins',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-die-geschichte-des-oberrheins.csl',
  },
  {
    label: 'Zeitschrift für digitale Geisteswissenschaften (Deutsch)',
    id: 'zeitschrift-fur-digitale-geisteswissenschaften',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-digitale-geisteswissenschaften.csl',
  },
  {
    label: 'Zeitschrift für Fantastikforschung (Deutsch)',
    id: 'zeitschrift-fur-fantastikforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-fantastikforschung.csl',
  },
  {
    label: 'Zeitschrift für Geschichtsdidaktik (Deutsch)',
    id: 'zeitschrift-fur-geschichtsdidaktik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-geschichtsdidaktik.csl',
  },
  {
    label: 'Zeitschrift für Internationale Beziehungen (Deutsch)',
    id: 'zeitschrift-fur-internationale-beziehungen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-internationale-beziehungen.csl',
  },
  {
    label: 'Zeitschrift für Kunstgeschichte',
    id: 'zeitschrift-fur-kunstgeschichte',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-kunstgeschichte.csl',
  },
  {
    label: 'Zeitschrift für Medien- und Kulturforschung (Deutsch)',
    id: 'zeitschrift-fur-medien-und-kulturforschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-medien-und-kulturforschung.csl',
  },
  {
    label: 'Zeitschrift für Medienwissenschaft (Deutsch)',
    id: 'zeitschrift-fur-medienwissenschaft',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-medienwissenschaft.csl',
  },
  {
    label: 'Zeitschrift für Ostmitteleuropa-Forschung (Deutsch)',
    id: 'zeitschrift-fur-ostmitteleuropa-forschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-ostmitteleuropa-forschung.csl',
  },
  {
    label: 'Zeitschrift für Pädagogik (Deutsch)',
    id: 'zeitschrift-fur-padagogik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-padagogik.csl',
  },
  {
    label: 'Zeitschrift für Papyrologie und Epigraphik',
    id: 'zeitschrift-fur-papyrologie-und-epigraphik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-papyrologie-und-epigraphik.csl',
  },
  {
    label: 'Zeitschrift für Parlamentsfragen (Deutsch)',
    id: 'zeitschrift-fur-parlamentsfragen',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-parlamentsfragen.csl',
  },
  {
    label: 'Zeitschrift für Politik (German)',
    id: 'zeitschrift-fur-politik',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-politik.csl',
  },
  {
    label: 'Zeitschrift für Qualitative Forschung (Deutsch)',
    id: 'zeitschrift-fur-qualitative-forschung',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-qualitative-forschung.csl',
  },
  {
    label: 'Zeitschrift für Religionswissenschaft (author-date)',
    id: 'zeitschrift-fur-religionswissenschaft-author-date',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-religionswissenschaft-author-date.csl',
  },
  {
    label: 'Zeitschrift für Religionswissenschaft (note)',
    id: 'zeitschrift-fur-religionswissenschaft-note',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-religionswissenschaft-note.csl',
  },
  {
    label: 'Zeitschrift für Soziologie (Deutsch)',
    id: 'zeitschrift-fur-soziologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-soziologie.csl',
  },
  {
    label: 'Zeitschrift für Theologie und Kirche (Deutsch)',
    id: 'zeitschrift-fur-theologie-und-kirche',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-theologie-und-kirche.csl',
  },
  {
    label: 'Zeitschrift für Theologie und Philosophie',
    id: 'zeitschrift-fur-theologie-und-philosophie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-theologie-und-philosophie.csl',
  },
  {
    label: 'Zeitschrift für Zahnärztliche Implantologie (Deutsch)',
    id: 'zeitschrift-fur-zahnarztliche-implantologie',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeitschrift-fur-zahnarztliche-implantologie.csl',
  },
  {
    label: 'Zeszyty Prawnicze BAS (Polski)',
    id: 'zeszyty-prawnicze-bas',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zeszyty-prawnicze-bas.csl',
  },
  {
    label: 'Zilsel (Français)',
    id: 'zilsel',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zilsel.csl',
  },
  {
    label:
      'ZitierGuide: Leitfaden zum fachgerechten Zitieren in rechtswissenschaftlichen Arbeiten (Roger Müller) (Deutsch - Schweiz)',
    id: 'zitierguide-leitfaden-zum-fachgerechten-zitieren-in-rechtswissenschaftlichen-arbeiten',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zitierguide-leitfaden-zum-fachgerechten-zitieren-in-rechtswissenschaftlichen-arbeiten.csl',
  },
  {
    label: 'Zoological Journal of the Linnean Society',
    id: 'zoological-journal-of-the-linnean-society',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zoological-journal-of-the-linnean-society.csl',
  },
  {
    label: 'Zootaxa',
    id: 'zootaxa',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zootaxa.csl',
  },
  {
    label: 'Zwitscher-Maschine',
    id: 'zwitscher-maschine',
    value:
      'https://raw.githubusercontent.com/citation-style-language/styles/master/zwitscher-maschine.csl',
  },
  {
    label: 'JM ALWD for WU',
    id: 'jm-alwd-wu',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-alwd-wu.csl',
  },
  {
    label: 'JM AZR (Erstzitat kurz mit Verzeichnissen)',
    id: 'jm-azr-erstzitat-kurz-mit-verzeichnissen',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-azr-erstzitat-kurz-mit-verzeichnissen.csl',
  },
  {
    label: 'JM AZR',
    id: 'jm-azr',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-azr.csl',
  },
  {
    label: 'JM Chicago Manual of Style 16th edition (full note) [Nagoya]',
    id: 'jm-chicago-fullnote-bibliography-nagoya',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-chicago-fullnote-bibliography-nagoya.csl',
  },
  {
    label: 'JM Chicago Manual of Style 16th edition (full note, polyglot)',
    id: 'jm-chicago-fullnote-bibliography-polyglot',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-chicago-fullnote-bibliography-polyglot.csl',
  },
  {
    label: 'JM Chicago Manual of Style 16th edition (full note)',
    id: 'jm-chicago-fullnote-bibliography',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-chicago-fullnote-bibliography.csl',
  },
  {
    label: 'JM Chinese Std GB/T 7714-2005 (numeric, Chinese)',
    id: 'jm-chinese-gb7714-2005-numeric',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-chinese-gb7714-2005-numeric.csl',
  },
  {
    label: 'JM Diritto pubblico comparato ed europeo',
    id: 'jm-diritto-pubblico-comparato-ed-europeo',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-diritto-pubblico-comparato-ed-europeo.csl',
  },
  {
    label: 'JM Harvard - Australian National University',
    id: 'harvard-australian-national-university',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-harvard-australian-national-university.csl',
  },
  {
    label: 'JM IBFD Standard Citations and References (with page label)',
    id: 'jm-ibfd-with-page-label',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-ibfd-with-page-label.csl',
  },
  {
    label: 'JM IBFD Standard Citations and References',
    id: 'jm-ibfd',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-ibfd.csl',
  },
  {
    label: 'JM Indigo Book Law Review',
    id: 'jm-indigobook-law-review',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-indigobook-law-review.csl',
  },
  {
    label: 'JM Indigo Book',
    id: 'jm-indigobook',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-indigobook.csl',
  },
  {
    label: '日本社会学会 (author-date, Japanese)',
    id: 'japan-sociological-society',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-japan-sociological-society.csl',
  },
  {
    label: 'JM leg cit mit Literaturverzeichnis',
    id: 'jm-leg-cit-literaturverzeichnis',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-leg-cit-literaturverzeichnis.csl',
  },
  {
    label: 'JM leg cit ohne Verzeichnisse',
    id: 'jm-leg-cit-ohne-verzeichnisse',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-leg-cit-ohne-verzeichnisse.csl',
  },
  {
    label: 'JM leg cit mit Rechtsquellenverzeichnis und Literaturverzeichnis',
    id: 'jm-leg-cit-rechtsquellenverzeichnis-literaturverzeichnis',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-leg-cit-rechtsquellenverzeichnis-literaturverzeichnis.csl',
  },
  {
    label:
      'JM - Canadian Guide to Uniform Legal Citation (9th edition) / Manuel canadien de la référence juridique (9ᵉ édition)',
    id: 'jm-mgcill-v9',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-mcgill-v9.csl',
  },
  {
    label: 'JM New Zealand Law Style',
    id: 'jm-new-zealand-law',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-new-zealand-law.csl',
  },
  {
    label: 'JM OSCOLA - Oxford Standard for Citation of Legal Authorities',
    id: 'jm-oscola',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-oscola.csl',
  },
  {
    label: 'JM Taylor & Francis - Chicago Manual of Style (author-date)',
    id: 'jm-taylor-and-francis-chicago-author-date',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-taylor-and-francis-chicago-author-date.csl',
  },
  {
    label: 'JM Turabian 8th edition (full note, EU multilingual)',
    id: 'jm-turabian-fullnote-bibliography-eu-multi',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-turabian-fullnote-bibliography-eu-multi.csl',
  },
  {
    label: 'JM Turabian 8th edition (full note, Dutch multilingual)',
    id: 'jm-turabian-fullnote-bibliography-nl-multi',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-turabian-fullnote-bibliography-nl-multi.csl',
  },
  {
    label: 'JM Vis Moot variant 1',
    id: 'jm-vis-moot-1',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-vis-moot-1.csl',
  },
  {
    label: 'JM Wirtschaftsuniversität Wien – Steuerrecht',
    id: 'jm-wirtschaftsuniversitat-wien-steuerrecht',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/jm-wirtschaftsuniversitat-wien-steuerrecht.csl',
  },
  {
    label: 'Verwijzingen en Afkortingen (Belgium)',
    id: 'juris-eu.int',
    value:
      'https://raw.githubusercontent.com/Juris-M/jm-styles/master/v-en-a.csl',
  },
];

export const cslList = new Fuse(cslListRaw, {
  threshold: 0.35,
  minMatchCharLength: 3,
  keys: ['id', 'label'],
});
