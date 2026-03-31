import React from 'react';
import { twMerge } from 'tailwind-merge';

type HtmlContent = string | React.ReactNode;

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export type CallToAction = {
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type FeatureItem = {
  title?: string;
  description?: string;
  icon?: React.ReactNode | string;
  callToAction?: CallToAction;
  classes?: Record<string, string>;
};

export interface Features3Props {
  id?: string;
  isDark?: boolean;
  bg?: HtmlContent;
  title?: HtmlContent;
  subtitle?: HtmlContent;
  tagline?: HtmlContent;
  image?: string | HtmlContent;
  items?: FeatureItem[];
  columns?: number;
  defaultIcon?: React.ReactNode | string;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
  classes?: {
    container?: string;
    headline?: Record<string, string>;
    items?: Record<string, string>;
  };
}

function renderHtml(value?: HtmlContent) {
  if (!value) return null;
  if (isString(value)) {
    return <span dangerouslySetInnerHTML={{ __html: value }} />;
  }
  return <>{value}</>;
}

export function Headline({
  title,
  subtitle,
  tagline,
  classes = {},
}: {
  title?: HtmlContent;
  subtitle?: HtmlContent;
  tagline?: HtmlContent;
  classes?: Record<string, string>;
}) {
  const {
    container: containerClass = 'max-w-3xl',
    title: titleClass = 'text-3xl md:text-4xl ',
    subtitle: subtitleClass = 'text-xl',
  } = classes;

  if (!title && !subtitle && !tagline) return null;

  return (
    <div className={twMerge('mb-8 md:mx-auto md:mb-12 text-center', containerClass)}>
      {tagline && (
        <p
          className="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase"
          dangerouslySetInnerHTML={{ __html: isString(tagline) ? tagline : String(tagline) }}
        />
      )}
      {title && (
        <h2
          className={twMerge(
            'font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl',
            titleClass
          )}
          dangerouslySetInnerHTML={{ __html: isString(title) ? title : String(title) }}
        />
      )}
      {subtitle && (
        <p
          className={twMerge('mt-4 text-muted', subtitleClass)}
          dangerouslySetInnerHTML={{ __html: isString(subtitle) ? subtitle : String(subtitle) }}
        />
      )}
    </div>
  );
}

export function Background({ isDark }: { isDark?: boolean }) {
  return <div className={twMerge('absolute inset-0', isDark ? 'bg-dark dark:bg-transparent' : '')} />;
}

export function WidgetWrapper({
  id,
  isDark = false,
  bg,
  containerClass = '',
  as: Component = 'section',
  children,
}: {
  id?: string;
  isDark?: boolean;
  bg?: HtmlContent;
  containerClass?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}) {
  return (
    <Component id={id} className="relative not-prose scroll-mt-[72px]">
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        {bg ? isString(bg) ? <span dangerouslySetInnerHTML={{ __html: bg }} /> : bg : <Background isDark={isDark} />}
      </div>
      <div
        className={twMerge(
          'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade',
          containerClass,
          isDark ? 'dark' : ''
        )}
      >
        {children}
      </div>
    </Component>
  );
}

export function Icon({ name, className }: { name?: React.ReactNode | string; className?: string }) {
  if (!name) return null;

  if (!isString(name)) {
    return <span className={className}>{name}</span>;
  }

  return <span className={twMerge('inline-block', className)}>{name}</span>;
}

export function Button({
  variant = 'secondary',
  target,
  text,
  icon,
  className = '',
  type,
  href,
  ...rest
}: CallToAction) {
  const variants: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn btn-tertiary',
    link: 'cursor-pointer hover:text-primary',
  };

  const content = (
    <>
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
      {icon && <span className="w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block">{icon}</span>}
    </>
  );

  if (type === 'button' || type === 'submit' || type === 'reset') {
    return (
      <button type={type} className={twMerge(variants[variant] || '', className)} {...rest}>
        {content}
      </button>
    );
  }

  return (
    <a
      className={twMerge(variants[variant] || '', className)}
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {content}
    </a>
  );
}

export function ItemGrid({
  items = [],
  columns,
  defaultIcon,
  classes = {},
}: {
  items?: FeatureItem[];
  columns?: number;
  defaultIcon?: React.ReactNode | string;
  classes?: Record<string, string>;
}) {
  const {
    container: containerClass = '',
    panel: panelClass = '',
    title: titleClass = '',
    description: descriptionClass = '',
    icon: defaultIconClass = 'text-primary',
    action: actionClass = '',
  } = classes;

  if (!items || items.length === 0) return null;

  const gridColumns =
    columns === 4
      ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
      : columns === 3
        ? 'lg:grid-cols-3 sm:grid-cols-2'
        : columns === 2
          ? 'sm:grid-cols-2 '
          : '';

  return (
    <div className={twMerge(`grid mx-auto gap-8 md:gap-y-12 ${gridColumns}`, containerClass)}>
      {items.map((item, idx) => {
        const { title, description, icon, callToAction, classes: itemClasses = {} } = item;
        return (
          <div key={idx} className="intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
            <div className={twMerge('flex flex-row max-w-md', panelClass, itemClasses.panel)}>
              <div className="flex justify-center">
                {(icon || defaultIcon) && (
                  <Icon
                    name={icon || defaultIcon}
                    className={twMerge('w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2', defaultIconClass, itemClasses.icon)}
                  />
                )}
              </div>
              <div className="mt-0.5">
                {title && <h3 className={twMerge('text-xl font-bold', titleClass, itemClasses.title)}>{title}</h3>}
                {description && (
                  <p
                    className={twMerge(`${title ? 'mt-3' : ''} text-muted`, descriptionClass, itemClasses.description)}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
                {callToAction && (
                  <div className={twMerge(`${title || description ? 'mt-3' : ''}`, actionClass, itemClasses.action)}>
                    <Button variant="link" {...callToAction} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Features3({
  id,
  isDark = false,
  bg,
  title,
  subtitle,
  tagline,
  image,
  items = [],
  columns,
  defaultIcon,
  isBeforeContent,
  isAfterContent,
  classes = {},
}: Features3Props) {
  return (
    <WidgetWrapper
      id={id}
      isDark={isDark}
      containerClass={`${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${
        isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''
      } ${classes.container ?? ''}`.trim()}
      bg={bg}
    >
      <Headline title={title} subtitle={subtitle} tagline={tagline} classes={classes.headline} />

      <div aria-hidden="true" className="aspect-w-16 aspect-h-7">
        {image && (
          <div className="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg">
            {isString(image) ? <span dangerouslySetInnerHTML={{ __html: image }} /> : <>{image}</>}
          </div>
        )}
      </div>

      <ItemGrid
        items={items}
        columns={columns}
        defaultIcon={defaultIcon}
        classes={{
          container: 'mt-12',
          panel: 'max-w-full sm:max-w-md',
          title: 'text-lg font-semibold',
          description: 'mt-0.5',
          icon: 'flex-shrink-0 mt-1 text-primary w-6 h-6',
          ...((classes.items as Record<string, string>) ?? {}),
        }}
      />
    </WidgetWrapper>
  );
}
