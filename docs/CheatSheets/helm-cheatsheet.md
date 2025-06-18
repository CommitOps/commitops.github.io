---
title: Helm
---

# Variables

```bash
name: {{ .Values.storageClassName }}
name: {{ .Values.storageClassName | quote }}
name: {{ .Values.storageClassName | default "default value" }}
name: {{ .Values.storageClassName | required ".storageClassName must be set" }}
name: {{ .Values.storageClassName | trim }}

name: {{ printf "%s-%d" .Values.storageClassName .Values.storageClassVersion }}
name: {{ .Values.storageClassName | replace "{placeholder}" "example" }}

{{ $fullName := printf "%s %s" .Values.firstName .Values.lastName }}

name: {{ .Values.storageClassName | trimAll "/" }}
name: {{ .Values.storageClassName | trimPrefix "/" }}
name: {{ .Values.storageClassName | trimSuffix "/" }}

name: {{ .Values.storageClassName | lower }}
name: {{ .Values.storageClassName | upper }}
```

<a href="https://helm.sh/docs/chart_template_guide/function_list/">See Helm documentation for full list of available functions</a>

# Build-Ins

```bash
{{ .Release.Name }}
{{ .Release.Namespace }}

{{ .Chart.Name }}
{{ .Chart.Version }}

{{ .Files.Get config.ini }}
```

<a href="https://helm.sh/docs/chart_template_guide/builtin_objects/">See Helm documentation for all options</a>

# Conditionals

```bash
{{ if .Values.enablePersistence }}
  # ...
{{ else if .Values.enableFilesystem }}
  # ...
{{ else }}
  # ...
{{ end }}

# equal, not equal
{{ if eq .Values.environment "production" }}
{{ if ne .Values.environment "production" }}

# and, or
{{ if and (eq .Values.environment "production") (eq .Values.host "minikube") }}
{{ if or (eq .Values.environment "production") (eq .Values.host "minikube") }}

# not (negation)
{{ if not (eq .Values.environment "production") }}

# greater than, less than
{{ if gt (len .Values.items) 3 }}
{{ if gte (len .Values.items) 3 }}
{{ if lt (len .Values.items) 3 }}
{{ if lte (len .Values.items) 3 }}

# strings
{{ if .Values.name | contains "example" }}
{{ if .Values.name | hasPrefix "foobar-" }}
{{ if .Values.name | hasSuffix "-foobar" }}
{{ if .Values.name | regexMatch "^[a-z]+$" }}

# lists
{{ if .Values.items | has "example" }}

# ternary
{{ ternary "returned if true" "returned if false" .Values.someBoolean }}
```

# Loops

```bash
# simple
volumes:
  {{ range .Values.volumeIds }}
  - volumeName: {{ . }}
  {{ end }}

# with named variable
volumes:
  {{ range $volumeId := .Values.volumeIds }}
  - volumeName: {{ $volumeId }}
  {{ end }}

# with index (array) or key (dict)
volumes:
  {{ range $key, $value := .Values.configuration }}
  - {{ $key }}: {{ $value }}
  {{ end }}
```

# Indentation

```bash
env:
  {{ .Values.environmentVariables | toYaml | indent 2 }}

env: {{ .Values.environmentVariables | toYaml | nindent 2 }}
```

# Includes

```bash
# define templates in _helpers.tpl
{{- define "your-project.image" -}}
{{ printf "%s:%s" .Values.image.name .Values.image.tag | quote }}
{{- end -}}

# use in other files
image: {{ include "your-project.image" . }}

# more specific parameters as the scope
{{- define "your-project.someInclude" -}}
{{ . | replace "{placeholder}" "example" }}
{{- end -}}

# usage
foobar: {{ include "your-project.someInclude" .Values.foobar }}
```

# Lookup

```bash
{{ $previous := lookup "v1" "Secret" .Release.Namespace "some-secret" }}
data:
  {{- if $previous }}
  foobarPassword: {{ $previous.data.foobarPassword | quote }}
  {{- else if .Values.foobarPassword }}
  foobarPassword: {{ .Values.foobarPassword | b64enc | quote }}
  {{- else }}
  foobarPassword: {{ randAlphaNum 40 | b64enc | quote }}
  {{- end }}
```

# Fail

```bash
{{ if eq .Values.storageClassName "foobar1" }}
  # ...
{{ else if eq .Values.storageClassName "foobar2" }}
  # ...
{{ else }}
  {{ fail ".storageClassName is not recognized" }}
{{ end }}
```

# Dates

```bash
# ISO 8601, format string is provided as a lookalike-string
{{ now | date "2006-01-02T15:04:05" }}
```

# Base64

```bash
{{ .Values.someData | b64enc }}
{{ .Values.someData | b64dec }}
```

# UUIDs

```bash
id: {{ uuidv4 }}
```

# Crypto

```bash
{{ .Values.someData | sha256sum }}

{{ .Values.someData | encryptAES "secret key" }}
{{ .Values.someData | decryptAES "secret key" }}
```