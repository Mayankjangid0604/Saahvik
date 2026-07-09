'use client';

import { useMemo, useState } from 'react';
import type { Category, Template } from '@/data/templates';
import { CATEGORIES } from '@/data/templates';
import TemplateCard from './TemplateCard';
import DetailsModal from './DetailsModal';

type SortKey = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function TierGrid({
  templates,
  tierName,
}: {
  templates: Template[];
  tierName: string;
}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('price-asc');
  const [selected, setSelected] = useState<Template | null>(null);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = templates.filter(
      (t) =>
        (category === 'all' || t.category === category) &&
        (q === '' || t.name.toLowerCase().includes(q)),
    );
    const sorted = [...filtered];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    return sorted;
  }, [templates, search, category, sort]);

  const categoriesInTier = useMemo(
    () => CATEGORIES.filter((c) => templates.some((t) => t.category === c)),
    [templates],
  );

  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          className="input"
          placeholder="Search templates by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search templates by name"
        />
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | 'all')}
          aria-label="Filter by category"
        >
          <option value="all">All categories</option>
          {categoriesInTier.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          className="select"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort templates"
        >
          <option value="price-asc">Price: low → high</option>
          <option value="price-desc">Price: high → low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
        <span className="toolbar__count">
          {visible.length} of {templates.length} templates
        </span>
      </div>

      {visible.length === 0 ? (
        <p style={{ padding: '40px 0', opacity: 0.7 }}>
          No templates match your search — try clearing the filters.
        </p>
      ) : (
        <div className="template-grid">
          {visible.map((t) => (
            <TemplateCard key={t.id} template={t} tierName={tierName} onDetails={setSelected} />
          ))}
        </div>
      )}

      {selected && (
        <DetailsModal template={selected} tierName={tierName} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
