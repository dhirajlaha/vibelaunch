# Spec-Kit Command Templates

This directory holds `.md` command template files used by the Spec-Kit CLI or agent workflows.

## Purpose

Each file in this directory defines a named command that the `speckit` agent or prompt can execute.
Templates are registered here so they can be discovered and validated by the Spec-Kit tooling.

## Adding a Command Template

1. Create a file named `<command-name>.md` in this directory.
2. Follow the format defined in `/specs/` feature artifacts (plan-template, spec-template, tasks-template).
3. Register the command name in any relevant agent or prompt file in `.github/agents/`.

## Status

This directory was created as part of the constitution v1.0.0 sync.
No command templates have been added yet — this is a placeholder to satisfy the pending item
flagged in the constitution sync impact report.
