## CI/CD Workflow Diagram

```mermaid
graph TD
    A[Push or Pull Request to master] --> B[Lint Job]\n    A --> C[Test Job]\n    A --> D[Audit Job]\n    A --> E[Check-Updates Job]
    B --> F[Build Job]
    C --> F
    D --> F
    E --> F
    F[Build Job]
```

### CI Process Steps
1. **Trigger**: On push or pull request to `master` branch.
2. **Lint**: Runs ESLint using your local config and dependencies.
3. **Test**: Runs Node.js tests using local test files.
4. **Audit**: Installs audit dependencies, attempts to fix vulnerabilities, and audits dependencies.
5. **Check-Updates**: Installs update dependencies and checks for outdated packages.
6. **Build**: Runs only after all previous jobs succeed, builds the app using your local build script.

All jobs use Node.js version specified in the workflow (`NODE_VERSION`).
